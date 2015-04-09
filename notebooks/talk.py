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
    "<img src=\\"../gallerids/HackBermuda/%(image)s\\" width=\\"400\\" height=\\"300\\">"
   ]
  },
"""


slides = [
    dict(title="There is no snow!",
         image="snow.jpg"),
    dict(title="Just pink sand and blue sky",
         image="horseshow.jpg"),
    dict(title="But there are hurricanes",
         image="gonzalo-modis-oct17.jpg"),
    dict(title="Gonzalo damage",
         image="treedown.jpg"),
    dict(title="Stand me up again",
         image="treeup.jpg"),
    dict(title="Raspberry pi day",
         image="piday3.jpg"),
    dict(title="Chewstick",
         image="mandela.jpg"),
    dict(title="The Pink and Blue Limo",
         image="pinkandbluelimo.jpg"),
    dict(title="America's Cup 2017",
         image="americascup.jpg"),
    dict(title="Come and hack in the sun",
         image="daniels.jpg"),
]


for slide in slides:

    print(template % slide)
    
