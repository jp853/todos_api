{"filter":false,"title":"todos.js","tooltip":"/todos-api/helpers/todos.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":[" "],"id":100}],[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["="],"id":101}],[{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":[" "],"id":102}],[{"start":{"row":11,"column":22},"end":{"row":19,"column":1},"action":"insert","lines":["function(req, res){","    db.Todo.create(req.body)","    .then(function(newTodo){","        res.status(201).json(newTodo);","    })","    .catch(function(err){","        res.send(err);","    });","}"],"id":103}],[{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"remove","lines":["s"],"id":104}],[{"start":{"row":0,"column":30},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":105}],[{"start":{"row":20,"column":1},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":106}],[{"start":{"row":21,"column":0},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":107}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"insert","lines":["e"],"id":108}],[{"start":{"row":22,"column":1},"end":{"row":22,"column":2},"action":"insert","lines":["x"],"id":109}],[{"start":{"row":22,"column":2},"end":{"row":22,"column":3},"action":"insert","lines":["p"],"id":110}],[{"start":{"row":22,"column":3},"end":{"row":22,"column":4},"action":"insert","lines":["o"],"id":111}],[{"start":{"row":22,"column":4},"end":{"row":22,"column":5},"action":"insert","lines":["r"],"id":112}],[{"start":{"row":22,"column":5},"end":{"row":22,"column":6},"action":"insert","lines":["t"],"id":113}],[{"start":{"row":22,"column":6},"end":{"row":22,"column":7},"action":"insert","lines":["s"],"id":114}],[{"start":{"row":22,"column":7},"end":{"row":22,"column":8},"action":"insert","lines":["."],"id":115}],[{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"insert","lines":["s"],"id":116}],[{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"insert","lines":["h"],"id":117}],[{"start":{"row":22,"column":10},"end":{"row":22,"column":11},"action":"insert","lines":["o"],"id":118}],[{"start":{"row":22,"column":11},"end":{"row":22,"column":12},"action":"insert","lines":["w"],"id":119}],[{"start":{"row":22,"column":12},"end":{"row":22,"column":13},"action":"insert","lines":["T"],"id":120}],[{"start":{"row":22,"column":13},"end":{"row":22,"column":14},"action":"insert","lines":["o"],"id":121}],[{"start":{"row":22,"column":14},"end":{"row":22,"column":15},"action":"insert","lines":["d"],"id":122}],[{"start":{"row":22,"column":15},"end":{"row":22,"column":16},"action":"insert","lines":["o"],"id":123}],[{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"insert","lines":["s"],"id":124}],[{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":[" "],"id":125}],[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["="],"id":126}],[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":[" "],"id":127}],[{"start":{"row":22,"column":20},"end":{"row":30,"column":1},"action":"insert","lines":["function(req, res){","    db.Todo.findById(req.params.todoId)","    .then(function(foundTodo){","        res.json(foundTodo);","    })","    .catch(function(err){","        res.send(err);","    });","}"],"id":128}],[{"start":{"row":2,"column":19},"end":{"row":10,"column":6},"action":"remove","lines":["function(req, res){","        db.Todo.find()","        .then(function(todos){","            res.json(todos);","        })","        .catch(function(err){","            res.send(err);","        });","    };"],"id":129}],[{"start":{"row":2,"column":19},"end":{"row":10,"column":6},"action":"insert","lines":["function(req, res){","        db.Todo.find()","        .then(function(todos){","            res.json(todos);","        })","        .catch(function(err){","            res.send(err);","        });","    };"],"id":130}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"remove","lines":["    "],"id":131}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":8},"action":"remove","lines":["    "],"id":132}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":8},"action":"remove","lines":["    "],"id":133}],[{"start":{"row":5,"column":8},"end":{"row":5,"column":12},"action":"remove","lines":["    "],"id":134}],[{"start":{"row":6,"column":4},"end":{"row":6,"column":8},"action":"remove","lines":["    "],"id":135}],[{"start":{"row":7,"column":4},"end":{"row":7,"column":8},"action":"remove","lines":["    "],"id":136}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":12},"action":"remove","lines":["    "],"id":137}],[{"start":{"row":9,"column":4},"end":{"row":9,"column":8},"action":"remove","lines":["    "],"id":138}],[{"start":{"row":30,"column":1},"end":{"row":30,"column":2},"action":"insert","lines":[";"],"id":139}],[{"start":{"row":20,"column":1},"end":{"row":20,"column":2},"action":"insert","lines":[";"],"id":140}],[{"start":{"row":30,"column":2},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":141}],[{"start":{"row":31,"column":0},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":142}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":1},"action":"insert","lines":["e"],"id":143}],[{"start":{"row":32,"column":1},"end":{"row":32,"column":2},"action":"insert","lines":["x"],"id":144}],[{"start":{"row":32,"column":2},"end":{"row":32,"column":3},"action":"insert","lines":["p"],"id":145}],[{"start":{"row":32,"column":3},"end":{"row":32,"column":4},"action":"insert","lines":["o"],"id":146}],[{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["r"],"id":147}],[{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["t"],"id":148}],[{"start":{"row":32,"column":6},"end":{"row":32,"column":7},"action":"insert","lines":["s"],"id":149}],[{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":["."],"id":150}],[{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["u"],"id":151}],[{"start":{"row":32,"column":9},"end":{"row":32,"column":10},"action":"insert","lines":["p"],"id":152}],[{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["d"],"id":153}],[{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"insert","lines":["a"],"id":154}],[{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"insert","lines":["t"],"id":155}],[{"start":{"row":32,"column":13},"end":{"row":32,"column":14},"action":"insert","lines":["e"],"id":156}],[{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":["T"],"id":157}],[{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["o"],"id":158}],[{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["d"],"id":159}],[{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["o"],"id":160}],[{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":[" "],"id":161}],[{"start":{"row":32,"column":19},"end":{"row":32,"column":20},"action":"insert","lines":["="],"id":162}],[{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":[" "],"id":163}],[{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":["f"],"id":164}],[{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"remove","lines":["f"],"id":165}],[{"start":{"row":32,"column":21},"end":{"row":40,"column":1},"action":"insert","lines":["function(req, res){","    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})","    .then(function(todo){","        res.json(todo);","    })","    .catch(function(err){","        res.send(err);","    });","}"],"id":166}],[{"start":{"row":40,"column":1},"end":{"row":40,"column":2},"action":"insert","lines":[";"],"id":167}],[{"start":{"row":40,"column":2},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":168}],[{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":169}],[{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"insert","lines":["e"],"id":170}],[{"start":{"row":42,"column":1},"end":{"row":42,"column":2},"action":"insert","lines":["x"],"id":171}],[{"start":{"row":42,"column":2},"end":{"row":42,"column":3},"action":"insert","lines":["p"],"id":172}],[{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["o"],"id":173}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["r"],"id":174}],[{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":["t"],"id":175}],[{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["s"],"id":176}],[{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["."],"id":177}],[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["d"],"id":178}],[{"start":{"row":42,"column":9},"end":{"row":42,"column":10},"action":"insert","lines":["e"],"id":179}],[{"start":{"row":42,"column":10},"end":{"row":42,"column":11},"action":"insert","lines":["l"],"id":180}],[{"start":{"row":42,"column":11},"end":{"row":42,"column":12},"action":"insert","lines":["e"],"id":181}],[{"start":{"row":42,"column":12},"end":{"row":42,"column":13},"action":"insert","lines":["t"],"id":182}],[{"start":{"row":42,"column":13},"end":{"row":42,"column":14},"action":"insert","lines":["e"],"id":183}],[{"start":{"row":42,"column":14},"end":{"row":42,"column":15},"action":"insert","lines":["T"],"id":184}],[{"start":{"row":42,"column":15},"end":{"row":42,"column":16},"action":"insert","lines":["o"],"id":185}],[{"start":{"row":42,"column":16},"end":{"row":42,"column":17},"action":"insert","lines":["d"],"id":186}],[{"start":{"row":42,"column":17},"end":{"row":42,"column":18},"action":"insert","lines":["o"],"id":187}],[{"start":{"row":42,"column":18},"end":{"row":42,"column":19},"action":"insert","lines":[" "],"id":188}],[{"start":{"row":42,"column":19},"end":{"row":42,"column":20},"action":"insert","lines":["="],"id":189}],[{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"insert","lines":[" "],"id":190}],[{"start":{"row":42,"column":21},"end":{"row":50,"column":1},"action":"insert","lines":["function(req, res){","    db.Todo.remove({_id: req.params.todoId})","    .then(function(){","        res.json({message: 'We deleted it!'});","    })","    .catch(function(err){","        res.send(err);","    });","}"],"id":191}],[{"start":{"row":50,"column":1},"end":{"row":50,"column":2},"action":"insert","lines":[";"],"id":192}],[{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"remove","lines":["s"],"id":193}],[{"start":{"row":22,"column":11},"end":{"row":22,"column":12},"action":"remove","lines":["w"],"id":194}],[{"start":{"row":22,"column":10},"end":{"row":22,"column":11},"action":"remove","lines":["o"],"id":195}],[{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"remove","lines":["h"],"id":196}],[{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"remove","lines":["s"],"id":197}],[{"start":{"row":22,"column":8},"end":{"row":22,"column":9},"action":"insert","lines":["g"],"id":198}],[{"start":{"row":22,"column":9},"end":{"row":22,"column":10},"action":"insert","lines":["e"],"id":199}],[{"start":{"row":22,"column":10},"end":{"row":22,"column":11},"action":"insert","lines":["t"],"id":200}]]},"ace":{"folds":[],"scrolltop":443,"scrollleft":0,"selection":{"start":{"row":22,"column":11},"end":{"row":22,"column":11},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":26,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1514569543589,"hash":"3524d99ff22cf187466e2155f80a58531019cb16"}