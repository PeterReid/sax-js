// https://github.com/isaacs/sax-js/issues/49
require(__dirname).test
  ( { xml : "<?has unbalanced \"quotes?><xml>body</xml>"
    , expect :
      [ [ "processinginstruction", { name: "has", body: "unbalanced \"quotes" } ],
<<<<<<< HEAD
        [ "opentag", { name: "xml", attributes: {} } ]
=======
        [ "opentag", { name: "xml", attributes: {}, isSelfClosing: false } ]
>>>>>>> isaacs/master
      , [ "text", "body" ]
      , [ "closetag", "xml" ]
      ]
    , strict : false
    , opt : { lowercasetags: true, noscript: true }
    }
  )
<<<<<<< HEAD


=======
>>>>>>> isaacs/master
