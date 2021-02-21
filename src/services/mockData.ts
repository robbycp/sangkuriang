const dataLine = [
  {
    "id": "japan",
    "color": "hsl(192, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 109
      },
      {
        "x": "helicopter",
        "y": 137
      },
      {
        "x": "boat",
        "y": 213
      },
      {
        "x": "train",
        "y": 184
      },
      {
        "x": "subway",
        "y": 182
      },
      {
        "x": "bus",
        "y": 123
      },
      {
        "x": "car",
        "y": 213
      },
      {
        "x": "moto",
        "y": 300
      },
      {
        "x": "bicycle",
        "y": 89
      },
      {
        "x": "horse",
        "y": 289
      },
      {
        "x": "skateboard",
        "y": 288
      },
      {
        "x": "others",
        "y": 225
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(76, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 80
      },
      {
        "x": "helicopter",
        "y": 257
      },
      {
        "x": "boat",
        "y": 158
      },
      {
        "x": "train",
        "y": 96
      },
      {
        "x": "subway",
        "y": 43
      },
      {
        "x": "bus",
        "y": 203
      },
      {
        "x": "car",
        "y": 88
      },
      {
        "x": "moto",
        "y": 44
      },
      {
        "x": "bicycle",
        "y": 197
      },
      {
        "x": "horse",
        "y": 122
      },
      {
        "x": "skateboard",
        "y": 157
      },
      {
        "x": "others",
        "y": 130
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(294, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 102
      },
      {
        "x": "helicopter",
        "y": 181
      },
      {
        "x": "boat",
        "y": 118
      },
      {
        "x": "train",
        "y": 12
      },
      {
        "x": "subway",
        "y": 142
      },
      {
        "x": "bus",
        "y": 36
      },
      {
        "x": "car",
        "y": 157
      },
      {
        "x": "moto",
        "y": 265
      },
      {
        "x": "bicycle",
        "y": 201
      },
      {
        "x": "horse",
        "y": 175
      },
      {
        "x": "skateboard",
        "y": 158
      },
      {
        "x": "others",
        "y": 240
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(41, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 37
      },
      {
        "x": "helicopter",
        "y": 238
      },
      {
        "x": "boat",
        "y": 204
      },
      {
        "x": "train",
        "y": 180
      },
      {
        "x": "subway",
        "y": 253
      },
      {
        "x": "bus",
        "y": 6
      },
      {
        "x": "car",
        "y": 274
      },
      {
        "x": "moto",
        "y": 120
      },
      {
        "x": "bicycle",
        "y": 55
      },
      {
        "x": "horse",
        "y": 270
      },
      {
        "x": "skateboard",
        "y": 123
      },
      {
        "x": "others",
        "y": 113
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(322, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 80
      },
      {
        "x": "helicopter",
        "y": 177
      },
      {
        "x": "boat",
        "y": 56
      },
      {
        "x": "train",
        "y": 178
      },
      {
        "x": "subway",
        "y": 85
      },
      {
        "x": "bus",
        "y": 102
      },
      {
        "x": "car",
        "y": 62
      },
      {
        "x": "moto",
        "y": 259
      },
      {
        "x": "bicycle",
        "y": 127
      },
      {
        "x": "horse",
        "y": 22
      },
      {
        "x": "skateboard",
        "y": 218
      },
      {
        "x": "others",
        "y": 201
      }
    ]
  }
]
const dataPie = [
  {
    "id": "javascript",
    "label": "javascript",
    "value": 88,
    "color": "hsl(267, 70%, 50%)"
  },
  {
    "id": "make",
    "label": "make",
    "value": 351,
    "color": "hsl(20, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 207,
    "color": "hsl(245, 70%, 50%)"
  },
  {
    "id": "haskell",
    "label": "haskell",
    "value": 485,
    "color": "hsl(169, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 5,
    "color": "hsl(17, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 526,
    "color": "hsl(173, 70%, 50%)"
  },
  {
    "id": "php",
    "label": "php",
    "value": 146,
    "color": "hsl(257, 70%, 50%)"
  },
  {
    "id": "ruby",
    "label": "ruby",
    "value": 210,
    "color": "hsl(85, 70%, 50%)"
  },
  {
    "id": "erlang",
    "label": "erlang",
    "value": 315,
    "color": "hsl(293, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 378,
    "color": "hsl(72, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 43,
    "color": "hsl(289, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 228,
    "color": "hsl(145, 70%, 50%)"
  },
  {
    "id": "go",
    "label": "go",
    "value": 310,
    "color": "hsl(289, 70%, 50%)"
  },
  {
    "id": "sass",
    "label": "sass",
    "value": 522,
    "color": "hsl(15, 70%, 50%)"
  },
  {
    "id": "rust",
    "label": "rust",
    "value": 590,
    "color": "hsl(309, 70%, 50%)"
  },
  {
    "id": "css",
    "label": "css",
    "value": 552,
    "color": "hsl(359, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 231,
    "color": "hsl(311, 70%, 50%)"
  },
  {
    "id": "java",
    "label": "java",
    "value": 115,
    "color": "hsl(192, 70%, 50%)"
  }
]

const data = {
  dataLine,
  dataPie,
}

export default data
