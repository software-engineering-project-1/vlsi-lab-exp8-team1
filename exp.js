

            function Path() {
                this.commands = [];
            }

            Path.prototype = {
                toArray: function() {
                    return this.commands;
                },

                moveTo: function(x,y) {
                    this.commands.push(0);
                    this.commands.push(x);
                    this.commands.push(y);
                },

                lineTo: function(x,y) {
                    this.commands.push(1);
                    this.commands.push(x);
                    this.commands.push(y);
                }, 

                cornerTo: function(cx, cy, x, y) {
                    this.commands.push(6);
                    this.commands.push(x);
                    this.commands.push(y);
                    this.commands.push(cx);
                    this.commands.push(cy);
                },

                close: function() {
                    this.commands.push(7);
                }
            };

            function e(id) {
                return document.getElementById(id);
            }

            function onevent(id, name, fn) {
                e(id).addEventListener(name, fn, false);
            }

            var zwibbler = Zwibbler.create("zwibbler-div", {
                showToolbar: false,
                multilineText: true, 
                showColourPanel: false
            });

            var DraggingImage;
            function addShapeTool(url, actionfn) {
                var div = document.createElement("div");
                var img = document.createElement("img");
                div.appendChild(img);
                e("toolbar").appendChild(div);
                img.src = url;
                img.ondragstart = function(e) {
                    DraggingImage = img;
                };

                img.dropfn = function(x, y) {
                    var path = new Path();
                    actionfn(x, y, path);
                    zwibbler.createNode("PathNode", {
                        commands: path.toArray(),
                        roundRadius: 5,
                        sloppiness: 0,
                        shadow: true,
                        fillStyle: "#59a8eb",
                        fontSize: "15",
                        text: url
                    });
                };

                img.onclick = function() {
                    img.dropfn(100, 100);
                };
            }

			function actionfn(x,y,imageName){
                zwibbler.beginTransaction();
                var imageid = zwibbler.createNode("ImageNode", {
                    url: imageName
                });
				
				
                var textid = zwibbler.createNode("TextNode", {
                    text: "E0",
                    fontSize: 15
                });

                zwibbler.translateNode(imageid, x-100, y-100);
                zwibbler.translateNode(textid, x-100+15, y-100+65);

                zwibbler.createGroup([imageid, textid]);
                zwibbler.commitTransaction();
            }
			
            function addImageTool(url,url2, actionfn) {
                var div = document.createElement("div");
                var img = document.createElement("img");
                div.appendChild(img);
                e("toolbar").appendChild(div);
                img.src = url;
				console.log(url);
                img.ondragstart = function(e) {
                    DraggingImage = img;
                };

                img.dropfn = function(x, y) {
                    if (actionfn) {
                        actionfn(x, y, url2);
						
                    } else {
                        zwibbler.beginTransaction();
                        var id = zwibbler.createNode("ImageNode", {
                            url: url
                        });
                        zwibbler.translateNode(id, x-img.naturalWidth/2,
                                y-img.naturalHeight/2);
                        
						zwibbler.commitTransaction();
						
                    }
                };

                img.onclick = function() {
                    img.dropfn(100, 100);
                };
                
            }
			
			function addImageDummyTool(url, actionfn) {
                var div = document.createElement("div");
                var img = document.createElement("img");
                div.appendChild(img);
                e("toolbar").appendChild(div);
                img.src = url;
				console.log(url);
                

                img.dropfn = function(x, y) {
                    if (actionfn) {
                        actionfn(x, y, url);
						
                    } else {
                        zwibbler.beginTransaction();
                        var id = zwibbler.createNode("ImageNode", {
                            url: url
                        });
                        zwibbler.translateNode(id, x-img.naturalWidth/2,
                                y-img.naturalHeight/2);
                        
						zwibbler.commitTransaction();
						
                    }
                };

                img.onclick = function() {
                     alert("For this Experiment, you don't need this component");
                };
                
            }
			
			function addWireTool(url, actionfn) {
                var div = document.createElement("div");
                var img = document.createElement("img");
                div.appendChild(img);
                e("toolbar").appendChild(div);
                img.src = url;
				console.log(url);
                img.ondragstart = function(e) {
                    DraggingImage = img;
                };

                img.dropfn = function(x, y) {
                    if (actionfn) {
                        actionfn(x, y, url);
                    } else {
                        zwibbler.beginTransaction();
                        var id = zwibbler.createNode("ImageNode", {
                            url: url
                        });
                        zwibbler.translateNode(id, x-img.naturalWidth/2,
                                y-img.naturalHeight/2);
                        zwibbler.commitTransaction();
                    }
                };

                img.onclick = function() {
					 zwibbler.useLineTool(properties={strokeStyle: "#ffffff"});
                };
                
            }
			
			addImageDummyTool("./images1/comp1.gif", actionfn); 
			addImageDummyTool("./images1/comp2.gif", actionfn);
			addWireTool("./images1/comp3.gif", actionfn);
			addImageTool("./images1/comp4.gif", "./images1/input.jpg", actionfn);
			addImageDummyTool("./images1/comp5.gif", actionfn);
			addImageDummyTool("./images1/comp6.gif", actionfn);
			addImageDummyTool("./images1/comp7.gif", actionfn);
			addImageDummyTool("./images1/comp8.gif", actionfn);
			addImageDummyTool("./images1/comp9.gif", actionfn);
			addImageTool("./images1/comp10.gif", "./images1/output.jpg", actionfn);
			addImageTool("./images1/comp11.gif", "./images1/latch.jpg", actionfn);
			addImageDummyTool("./images1/comp12.gif", actionfn);
            

            onevent("zwibbler-div", "dragover", function(e) {
                e.preventDefault(); 
            });

            onevent("zwibbler-div", "drop", function(e) {
                if (DraggingImage) {
                    DraggingImage.dropfn(e.pageX - 250, e.pageY-64);
                    e.preventDefault();
                }
            });

            onevent("pick-button", "click", function(e) {
                zwibbler.usePickTool();
            });

            onevent("arrow-button", "click", function(e) {
                zwibbler.useLineTool();
            });

            onevent("undo-button", "click", function(e) {
                zwibbler.undo();
            });

            onevent("redo-button", "click", function(e) {
                zwibbler.redo();
            });
