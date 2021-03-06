goog.provide('cm.json_files');
cm.json_files = {};
cm.json_files.test_maproot =
{
  "id": "foo",
  "title": "Test Maproot",
  "description": "This map demonstrates all maproot layer types supported by Crisis Map.",
  "viewport": {
    "lat_lon_alt_box": {
      "north": 38.905,
      "south": 37.781,
      "east": -75,
      "west": -120
    }
  },
  "base_map_type": "GOOGLE_ROADMAP",
  "languages": ["en"],
  "layers": [{
    "id": "16702544301115717071-07170133114386334500-4/1",
    "title": "Maps Engine Layer External",
    "description": "La la la",
    "visibility": "DEFAULT_ON",
    "viewport": {
      "lat_lon_alt_box": {
        "north": 42.700,
        "south": 42.200,
        "east": -83.200,
        "west": -83.700
      }
    },
    "type": "GOOGLE_MAP_DATA",
    "source": {
      "google_map_data": {
        "map_id": "10343636198137636421-05153758434712631099-4",
        "layer_key": "layer_00001"
      }
    }
  },
  {
    "id": "1319673871167",
    "title": "Maptiles",
    "description": "Acquired 2011-10-26 by <a href=\"http://www.geoeye.com\" target=\"_blank\">GeoEye</a> Ikonos",
    "viewport": {
      "lat_lon_alt_box": {
        "north": 8.31343,
        "south": 8.29937,
        "east": 124.66690,
        "west": 124.63591
      }
    },
    "min_zoom": 4,
    "max_zoom": 18,
    "clip_to_viewport": true,
    "visibility": "DEFAULT_OFF",
    "opacity": 50,
    "type": "GOOGLE_MAP_TILES",
    "source": {
      "google_map_tiles": {
        "tile_coordinate_type": "GOOGLE",
        "url": "http://mw1.google.com/crisisresponse/2011/philippines_flooding/geoeye/Philippines_PO_765484_2011_08_23_2011_12_28_maptiles/{X}_{Y}_{Z}.png"
      }
    }
  }, {
    "id": "1314426834242",
    "title": "Fusion Tables",
    "description": "Hurricane Evacuation Routes (HSIP Gold 2010)",
    "viewport": {
      "lat_lon_alt_box": {
        "north": 33.62,
        "south": 31.144,
        "east": -79.281,
        "west": -81.899
      }
    },
    "visibility": "DEFAULT_OFF",
    "type": "GOOGLE_FUSION_TABLES",
    "source": {
      "google_fusion_tables": {
        "from": "1339588",
        "select": "geometry",
        "where": ""
      }
    }
  }, {
    "id": "13144266206955",
    "title": "GEORSS",
    "description": "Pepco Power Outages",
    "viewport": {
      "lat_lon_alt_box": {
        "north": 45.84,
        "south": 34.59,
        "east": -63.93,
        "west": -75.18
      }
    },
    "visibility": "DEFAULT_OFF",
    "type": "GEORSS",
    "source": {
      "georss": {
        "url": "http://mw1.google.com/crisisresponse/tests/thematic_areas.xml"
      }
    }
  }, {
    "id": "1314426620695",
    "title": "KML",
    "description": "Cloud Imagery - East Coast",
    "viewport": {
      "lat_lon_alt_box": {
        "north": 45.84,
        "south": 34.59,
        "east": -63.93,
        "west": -75.18
      }
    },
    "visibility": "DEFAULT_OFF",
    "type": "KML",
    "source": {
      "kml": {
        "url": "http://crisislanding.appspot.com/clouds/irene.kml"
      }
    }
  },
  {
    "id": "2",
    "title": "KML-in-Docs",
    "description": "Hello",
    "visibility": "DEFAULT_OFF",
    "viewport": {
      "lat_lon_alt_box": {
        "north": 38.905,
        "south": 37.781,
        "east": -77.007,
        "west": -122.505
      }
    },
    "min_zoom": 5,
    "max_zoom": 10,
    "type": "KML",
    "suppress_download_link": true,
    "source": {
      "kml": {
        "url": "docs://0B3_RWstFJ7iOMEFXMWdhYUJReDZIcXpfdGU5eWR4dw"
      }
    }
  },
  {
      "id": "300",
      "title": "Folder: Thailand Flood Resources",
      "description": "Top-level folder",
      "visibility": "DEFAULT_OFF",
      "type": "FOLDER",
      "sublayers": [
        {
          "id": "3001",
          "title": "Assets",
          "description": "Second-level folder",
          "visibility": "DEFAULT_OFF",
          "type": "FOLDER",
          "sublayers": [
            {
              "id": "1321565346712",
              "title": "Ikonos 11/17 Imagery (Maptiles)",
              "description": "Acquired 2011-11/17 by <a href=\"http://www.geoeye.com\" target=\"_blank\">GeoEye</a> Ikonos",
              "viewport": {
                "lat_lon_alt_box": {
                  "north": 8.31,
                  "south": 8.30,
                  "east": 124.67,
                  "west": 124.64
                }
              },
              "min_zoom": 3,
              "max_zoom": 18,
              "clip_to_viewport": true,
              "visibility": "DEFAULT_OFF",
              "opacity": 50,
              "type": "GOOGLE_MAP_TILES",
              "source": {
                "google_map_tiles": {
                  "tile_coordinate_type": "GOOGLE",
                  "url": "http://mw1.google.com/crisisresponse/2011/bangkok_floods/geoeye/Bangkok_Floods_po_735655_2011-11-12_2011_11_17_maptiles/{X}_{Y}_{Z}.png"
                }
              }
            },
            {
              "id": "1318858474855",
              "title": "Local Community Networks (FT)",
              "viewport": {
                "lat_lon_alt_box": {
                  "north": 18.82,
                  "south": 13.20,
                  "east": 103.85,
                  "west": 98.23
                }
              },
              "visibility": "DEFAULT_OFF",
              "type": "GOOGLE_FUSION_TABLES",
              "source": {
                "google_fusion_tables": {
                  "from": "1842877",
                  "select": "",
                  "where": ""
                }
              }
            }, {
              "id": "1319475227341",
              "title": "Flood-related photos (KML)",
              "viewport": {
                "lat_lon_alt_box": {
                  "north": 18.82,
                  "south": 13.20,
                  "east": 103.86,
                  "west": 98.23
                }
              },
              "visibility": "DEFAULT_ON",
              "type": "KML",
              "source": {
                "kml": {
                  "url": "http://hugin.ansur.no/un.xml"
                }
              }
            }
          ]
        }
      ]
    },
    {
      "id": "2300",
      "title": "Folder: US Flood Resources",
      "description": "Top-level folder",
      "visibility": "DEFAULT_OFF",
      "type": "FOLDER",
      "list_item_type": "CHECK_HIDE_CHILDREN",
      "sublayers": [
        {
          "id": "23001",
          "title": "Hurricane Irene",
          "description": "Second-level folder",
          "visibility": "DEFAULT_ON",
          "type": "FOLDER",
          "sublayers": [
            {
              "id": "23002",
              "title": "Power Plants",
              "description": "Third-level folder",
              "visibility": "DEFAULT_ON",
              "type": "FOLDER",
              "sublayers": [
                {
                  "id": "131442662069555",
                  "title": "Pepco Power (GEORSS)",
                  "description": "Source: Pepco",
                  "viewport": {
                    "lat_lon_alt_box": {
                      "north": 45.84,
                      "south": 34.59,
                      "east": -63.93,
                      "west": -75.18
                    }
                  },
                  "visibility": "DEFAULT_ON",
                  "type": "GEORSS",
                  "source": {
                    "georss": {
                      "url": "http://mw1.google.com/crisisresponse/tests/thematic_areas.xml"
                    }
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "traffic",
      "title": "Google Traffic Layer",
      "description": "Traffic",
      "visibility": "DEFAULT_OFF",
      "type": "GOOGLE_TRAFFIC",
      "source": {
      }
    },
    {
      "id": "transit",
      "title": "Google Transit Layer",
      "description": "Transit",
      "visibility": "DEFAULT_OFF",
      "type": "GOOGLE_TRANSIT",
      "source": {
      }
    },
    {
      "id": "weather",
      "title": "Google Weather Layer",
      "description": "Weather",
      "visibility": "DEFAULT_OFF",
      "type": "GOOGLE_WEATHER",
      "source": {
        "weather": {
          "label_color": "WHITE",
          "temperature_unit": "FAHRENHEIT",
          "wind_speed_unit": "METERS_PER_SECOND"
        }
      }
    },
    {
      "id": "cloud",
      "title": "Google Cloud Layer",
      "visibility": "DEFAULT_OFF",
      "description": "Clouds",
      "type": "GOOGLE_CLOUD_IMAGERY",
      "source": {
      }
    },
    {
      "id": "wms",
      "title": "WMS",
      "visibility": "DEFAULT_OFF",
      "description": "GME WMS Layer Florida",
      "type": "WMS",
      "source": {
        "wms": {
          "url": "https://earthbuilder.google.com/13560186249300745898-09371596555021502644-4/wms/",
          "layer_names": ["13560186249300745898-13464369061086462890-4",
                          "13560186249300745898-02664411750483227641-4"]
        }
      }
    }
  ]
}
;
cm.json_files.test_maproot_internal =
{
  "id": "foo",
  "title": "Test Maproot Internal",
  "description": "For internal testing of maps with maproot GoogleMapData layer types.",
  "viewport": {
    "lat_lon_alt_box": {
      "north": 38.905,
      "south": 37.781,
      "east": -75,
      "west": -120
    }
  },
  "base_map_type": "roadmap",
  "languages": ["en"],
  "layers": [{
    "id": "could_be_anything",
    "title": "Maps Engine Layer Internal",
    "description": "La la la",
    "visibility": "DEFAULT_ON",
    "viewport": {
      "lat_lon_alt_box": {
        "north": 42.700,
        "south": 42.200,
        "east": -83.200,
        "west": -83.700
      }
    },
    "type": "GOOGLE_MAP_DATA",
    "source": {
      "google_map_data": {
        "sub_type": "VECTOR",
        "tile_auth_token": {
          "token": "some_token"
        },
        "vector_layer": {
          "table_id": "1234",
          "style_id": 2,
          "balloon_template_id": 1
        }
      }
    }
  },
  {
    "id": "could_be_anything_2",
    "title": "Maps Engine Layer Internal Image",
    "description": "La la la",
    "visibility": "DEFAULT_ON",
    "viewport": {
      "lat_lon_alt_box": {
        "north": 42.700,
        "south": 42.200,
        "east": -83.200,
        "west": -83.700
      }
    },
    "type": "GOOGLE_MAP_DATA",
    "source": {
      "google_map_data": {
        "sub_type": "IMAGE",
        "tile_auth_token": {
          "token": "1234"
        },
        "image_layer": {
          "asset_id": "10446176163891957399-10297006806646011125-4/2",
          "tile_height": 256,
          "tile_width": 256,
          "epoch": 2
        }
      }
    }
  }]
}
;
