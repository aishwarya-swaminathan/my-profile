"""Check static assets, section links and phone privacy before publishing."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import re
ROOT = Path(__file__).resolve().parents[1]
class SiteParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.refs, self.headings = [], [], 0
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'h1':
            self.headings += 1
        for key in ('href', 'src'):
            if key in attrs:
                self.refs.append(attrs[key])
source = (ROOT / 'index.html').read_text(encoding='utf-8')
parser = SiteParser()
parser.feed(source)
assert parser.headings == 1, 'Expected one main heading'
assert len(parser.ids) == len(set(parser.ids)), 'Duplicate HTML IDs'
for ref in parser.refs:
    url = urlsplit(ref)
    if url.scheme or url.netloc:
        assert url.scheme != 'tel', 'Phone link must not be published'
        continue
    assert not url.path.startswith('/'), f'Root-relative path breaks project hosting: {ref}'
    if url.path:
        assert (ROOT / url.path).is_file(), f'Missing asset: {ref}'
    if url.fragment:
        assert url.fragment in parser.ids, f'Missing section: {ref}'
assert not re.search(r'(?:\+91[\s-]*)?\b\d{10}\b', source), 'Possible phone number'
assert (ROOT / '.nojekyll').is_file()
print(f'PASS: {len(parser.refs)} links/assets checked; section IDs and phone privacy checked.')
