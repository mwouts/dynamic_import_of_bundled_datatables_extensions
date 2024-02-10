with open("../package/dt_bundle.js") as fp:
    dt = fp.read()

with open("page_template.html") as fp:
    html = fp.read()

html = html.replace("dt_src", dt)

with open("index.html", "w") as fp:
    fp.write(html)
