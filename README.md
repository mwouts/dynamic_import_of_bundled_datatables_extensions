The purpose of this repository is to provide an
example of how to bundle `DataTable` and one of its
extensions (buttons) and to import it dynamically
in the body of an HTML document.

The final document is `html/index.html`.

It is generated with the following commands:
```
# create dt_bundle.js
cd package
npm install
npm run build

# inject dt_bundle.js into index.html
cd ../html
python replace_dt_src_with_base64_encoding.py
```