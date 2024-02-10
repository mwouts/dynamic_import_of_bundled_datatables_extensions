from base64 import b64encode

with open("../package/simple_bundle.js") as fp:
    dt64 = b64encode(fp.read().encode("utf-8")).decode("ascii")

with open("page_template.html") as fp:
    html = fp.read()

html = html.replace("dt_src", "data:text/javascript;base64,{}".format(dt64))

with open("index.html", "w") as fp:
    fp.write(html)
