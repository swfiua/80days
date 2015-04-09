template = """
  {
   "cell_type": "markdown",
   "metadata": {
    "collapsed": true,
    "slideshow": {
     "slide_type": "slide"
    }
   },
   "source": [
    "%(title)s\\n",
    "=========\\n",
    "\\n",
    "<img src=\\"galleries/HackBermuda/%(image)s\\" width=\\"%(width)d\\" height=\\"%(height)d\\">"
   ]
  }
"""


slides = [
    dict(title="There is no snow!",
         image="snow.jpg"),
    dict(title="Just pink sand and blue sky",
         image="horseshoe.jpg"),
    dict(title="But there are hurricanes",
         image="gonzalo-modis-oct17.jpg",
         width=450, height=600),
    dict(title="Gonzalo damage",
         image="treedown.jpg"),
    dict(title="Stand me up again",
         image="treeup.jpg",
         width=450, height=600),
    dict(title="Raspberry pi day",
         image="pi_day_pies.jpg"),
    dict(title="Chewstick",
         image="mandela.jpg"),
    dict(title="The Pink and Blue Limo",
         image="pinkandbluelimo.jpg"),
    dict(title="America's Cup 2017",
         image="americascup.jpg"),
    dict(title="Come and hack in the sun",
         image="fishing.jpg"),
]

output = []

for slide in slides:

    info = dict(width=600, height=450)
    info.update(slide)
    output.append(template % info)

print(','.join(output))
    
