//统计活动名字
var opname = "GameWordDown";
var score_config=[{"max":0,"min":null,"basescore":0,"increase":0,"imagedir":"200-399","imagename":"3.png"},
{"max":4,"min":1,"basescore":200,"increase":49,"imagedir":"200-399","imagenum":8},
{"max":9,"min":5,"basescore":250,"increase":49,"imagedir":"200-399","imagenum":8},
{"max":14,"min":10,"basescore":300,"increase":49,"imagedir":"200-399","imagenum":8},
{"max":19,"min":15,"basescore":350,"increase":49,"imagedir":"200-399","imagenum":8},
{"max":24,"min":20,"basescore":400,"increase":24,"imagedir":"400-424","imagenum":6},
{"max":29,"min":25,"basescore":425,"increase":24,"imagedir":"425-499","imagenum":4},
{"max":34,"min":30,"basescore":450,"increase":24,"imagedir":"425-499","imagenum":4},
{"max":39,"min":35,"basescore":500,"increase":24,"imagedir":"500-599","imagenum":5},
{"max":44,"min":40,"basescore":525,"increase":24,"imagedir":"500-599","imagenum":5},
{"max":49,"min":45,"basescore":550,"increase":24,"imagedir":"500-599","imagenum":5},
{"max":54,"min":50,"basescore":575,"increase":24,"imagedir":"500-599","imagenum":5},
{"max":64,"min":55,"basescore":600,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":74,"min":65,"basescore":610,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":84,"min":75,"basescore":620,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":94,"min":85,"basescore":630,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":104,"min":95,"basescore":640,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":114,"min":105,"basescore":650,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":124,"min":115,"basescore":660,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":134,"min":125,"basescore":670,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":144,"min":135,"basescore":680,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":199,"min":145,"basescore":690,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":299,"min":200,"basescore":700,"increase":9,"imagedir":"600-709","imagenum":7},
{"max":null,"min":300,"basescore":710,"increase":0,"imagedir":"710","imagenum":3}]


//定义需要的变量
    //定义游戏场地的函数 并且传入两个参数  元素id和话题
    //调用对象的两个方法 初始化对象之前函数和初始化函数
var wordListNum=2;//词表数量
  var examType="cet4";
  var examDesc="四级"
  var scoreZone="";
  var tapDownTime="";
  var tapDownFirst=true;
  var tapCrazyTimes=0;
  var overDoneAll=false;
  function GameContainer(elementId, topics)
  {
    this.beforeInit();
    this.init(elementId, topics);console.log(this);
  }

//定义游戏的原型对象
    //定义常用的属性
    //定义 初始化 方法 传入相应的两个参数
        //在该方法内 初始化相应的属性值 并且游戏开始的方法


  GameContainer.prototype = {
    type:"game-container",
    curLevel: 0,
    levelsDesc: ["bicycle","car","rocket"],
    maxLevel:3,
    curLevelNum:5,
    maxId: 0,
    rightWord: 0,

    init:function(elementId, topics){
      this.id = elementId;
      this.widgetTypes = new Array();
      this.widgetList = new Array();
      this.curWord = undefined;
      this.curTopic = undefined;
      this.topics = topics;
      this.maxColls = 3;
      this.timerIntvl =700;
      this.timerId = "";
      this.curTopicStartTime = 0;
      this.continueRightTime = 0;
      this.DoneWordList = [];
      this.wrongTopic = [];
      this.gameStatus = "playing";
      this.nextFiveTopics = [];
      this.gameStart();
    },
      //定义 添加暂停 的方法
            //保存其中的this
            //找到其中的 游戏建议的 元素  并且添加上暂停对应的div元素
            //在暂停对应的div元素上 绑定方法
                //获取event对象  阻止其默认行为
                //判断游戏状态为正在播放的话
                    //调用pause方法
                //否则 调用重新开始方法

    addPauseBtn:function(){
      var self = this;
      self.getElement().find("#game-tips").append("<div class='pause-controller'></div>");

     // this.changePauseBtnStyle("glyphicon glyphicon-pause");
      $(".pause-controller").bind("tapone",function(e){
          var ev = e || window.event;
          ev.preventDefault();
          ev.stopPropagation();
          if(self.gameStatus == "playing"){
              self.pause();
          }
          else {
              self.resume();
          }
      })
    },
      //定义  获取游戏暂停按钮 的方法
            //返回对应的暂停元素

    getPauseBtn:function(){
        return $(".pause-controller");
    },
      // 定义 取消游戏暂停按钮 的方法
         //调用  获取游戏暂停按钮  以及  取消  方法
    removePauseBtn:function(){
        this.getPauseBtn().remove();
    },
      //定义 改变暂停按钮样式  的方法  传入参数
        //调用  getPauseBtn 方法 更改其属性值
        //调用  getPauseBtn 方法 添加类名
    changePauseBtnStyle:function(styleClass){
        this.getPauseBtn().attr("class", "pause-controller");
        this.getPauseBtn().addClass(styleClass);
    },

      //定义 beforeInit 方法
        //定义对应变量 获取对应元素的初始值
    beforeInit:function(){
      var oWindow = $(window);
      var oElement = $("#game-container");
      var manuElement=$("#manuZone");
      var iWindowWidth = oWindow.width();
      var iWindowHeight = oWindow.height();

      var gameHeight = iWindowHeight - 100;
      var manuHeight=iWindowHeight-144;

        //设置对应的高度和宽度
        //如果游戏高度>400
      oElement.height(gameHeight);
      oElement.width(iWindowWidth);
      manuElement.width(iWindowWidth);
      manuElement.height(manuHeight);
      var optionHeight = gameHeight / rows;
      var iRowHeight = 40;
      if(gameHeight > 400){
        iRowHeight += ((gameHeight-400)/30);
      }
      while(optionHeight <= iRowHeight){
        rows -= 1;
        optionHeight = gameHeight / rows;
      }
      if(oElement.find("#game-tips").length == 0){
          var sGameTips = "<div id='game-tips'>" +
                  "<div class='wordNumberWrapper'>" +
                  "<img src='http://baicizhan.qiniucdn.com/games/worddown/img/topBar/top.png' height='50px'/>"+
                  "<div class='rightWordNumber'>0</div>" +
                  
                  "<div class='rightWordNumber2'>0</div>" +
                
                  "</div>" +
                  "</div>";//图片高度需要一致
          oElement.append(sGameTips);
      }
    },
      //定义 removeWidget方法

    removeWidget:function(widget){
      var oldList = this.widgetList;
      this.widgetList = new Array();
      for(var i in oldList)
      {
        if(widget == oldList[i])
        {
          continue;
        }
        this.widgetList.push(oldList[i]);
      }
      widget.removeElement();
    },
        //定义 decreaseLevel方法
    decreaseLevel: function(){
      var self = this;
      var curlevel = self.curLevel;
      curlevel -= 1;
      if(curlevel < 0){
        curlevel = 0;
      }
      self.curLevel = curlevel;
      gameContainer.setLevel(self.curLevel);
    },
      //定义 increaseLevel方法
      increaseLevel: function(){
      var self = this;
      var curlevel = self.curLevel;
      curlevel += 1;
      if(curlevel > self.maxLevel){
        curlevel = self.maxLevel;
      }
      self.curLevel = curlevel;
      gameContainer.setLevel(self.curLevel);
    },

    addWidget:function(widget) {
      this.widgetList.push(widget);
    },

    showTopic:function(topic){
      var self = this;
      self.initNextFiveTopics();
      var curTime = new Date();
      self.curTopicStartTime = curTime.getTime();
      var curWrongWordHtml = "";
      if(self.wrongTopic.length != 0){
        /*依赖外界的地方*/
        $(".wrong-word-title").css("visibility","visible");
        var x = self.wrongTopic[self.wrongTopic.length-1];
        curWrongWordHtml += "<dl class='wrong-word'>\
                <dt class='wrong-word-text'>" + x.topicContent.word + "</dt>\
                <dd class='wrong-word-mean'>" + x.topicContent.wordMean + "</dd>\
              </dl>";
      }
      $(".wrong-word-content").html(curWrongWordHtml);
      //this.keydownEvent();
     // this.mobileTouchEvent();
      //this.tapDownFast();
      this.showWordAndOptions(topic);
      this.appendAudio(topic);
      self.verticalMiddle();
    },

    /* 在页面上展示word和options */
    showWordAndOptions:function(topic){
        var self = this;
        var randomNum = gen_random_serials(0,3,3,[]);
        var y = rows - 1;
        var option1 = new Option(self);
        if(randomNum[0] == 0){
            option1.setContent(topic.topicContent.wordMean);
            option1.isAnswer = true;
        }
        else if(randomNum[0] == 1){
            option1.setContent(topic.topicContent.optionMean1);
        }
        else{
            option1.setContent(topic.topicContent.optionMean2);
        }
        option1.showContent();
        option1.setPosition(0, y);
        var option2 = new Option(this);
        if(randomNum[1] == 0){
            option2.setContent(topic.topicContent.wordMean);
            option2.isAnswer = true;
        }
        else if(randomNum[1] == 1){
            option2.setContent(topic.topicContent.optionMean1);
        }
        else{
            option2.setContent(topic.topicContent.optionMean2);
        }
        option2.showContent();
        option2.setPosition(1, y);
        var option3 = new Option(this);
        if(randomNum[2] == 0){
            option3.setContent(topic.topicContent.wordMean);
            option3.isAnswer = true;
        }
        else if(randomNum[2] == 1){
            option3.setContent(topic.topicContent.optionMean1);
        }
        else{
            option3.setContent(topic.topicContent.optionMean2);
        }
        option3.showContent();
        option3.setPosition(2, y);
        this.addWidget(option1);
        this.addWidget(option2);
        this.addWidget(option3);

        var word = new Word(this,topic.topicId);
        word.setContent(topic.topicContent.word);
        word.getElement().append();

        word.hideContent();
//      var x = Math.floor(Math.random()*3);
//      固定从中间出来
        var x = 1;
//      this.widgetList[this.widgetList.length - 1 - (2-x)].selected();

        var wordY = this.wrongTopic.length;
        word.setPosition(x,wordY);
        this.curWord = word;
    },

    appendAudio:function(topic){
        var self = this;
        if($("#" + topic.topicId).length == 0){
            $("body").append("<audio id='" + topic.topicId + "' src='" + getRealPath(topic.resourcesPath, topic.topicContent.wordAudioURL) + "'></audio>");
        }
        $("#" + topic.topicId).trigger("play");

        for(var idx = 0; idx < self.nextFiveTopics.length; idx++){
            var curTopic = self.nextFiveTopics[idx];
            if($("#" + curTopic.topicId).length == 0){
                /* 暂时没有played的控件时 */
                if($("[played]").length == 0){
                    $("body").append("<audio id='" + curTopic.topicId + "' src='" + getRealPath(curTopic.resourcesPath, curTopic.topicContent.wordAudioURL) + "'></audio>");
                }
                else
                {
                    var durationAudio = $("[played]")[0];
                    durationAudio = $(durationAudio);
                    durationAudio.attr("id", curTopic.topicId);
                    durationAudio.attr("src", getRealPath(curTopic.resourcesPath, curTopic.topicContent.wordAudioURL));
                    durationAudio.removeAttr("played");
                    durationAudio.removeAttr("loaded");
                }
            }
        }
     },

    gameStart:function(){
      var self = this;
      this.addPauseBtn();
      self.curTopic = self.topics.pop();
      self.showTopic(self.curTopic);
      self.setLevel(self.curLevel);
      oldHighScore = TopParent.callTop("get_high_score","");
      $(".highScore-num").html(oldHighScore);
    },

    initNextFiveTopics:function(){
        var self = this;
        var nextFiveTopics = [];
        var topicsLength = self.topics.length;
        var preLoadAudioTopics = topicsLength > 5 ? 5 : topicsLength;
        for(var idx = 0; idx < preLoadAudioTopics; idx++){
            nextFiveTopics[idx] = {};
            var curTopic = self.topics[topicsLength - idx - 1];
            if(defined(curTopic)){
                for(var i in curTopic){
                    nextFiveTopics[idx][i] = curTopic[i];
                };
            }
        }
        self.nextFiveTopics = nextFiveTopics;
    },

    replay:function(){
      $(".latest-topic").html("");
      $(".rightWordNumber").html("0");
      $(".pause-controller").attr("class","pause-controller");
      if(this.timerId != "")
      {
        clearInterval(this.timerId);
        this.timerId = "";
      }
      if(this.curWord)
      {
        this.curWord.removeElement();
        this.curWord = undefined;
      }
      this.curLevel = 0;
      this.rightWord = 0;
      this.widgetList.forEach(function(x){x.removeElement();});
      this.widgetList = [];
      this.wrongTopic = [];
      this.DoneWordList = [];
      this.gameStart();
    },
    checkResultRight: function(selectedOption,options){
      var self = this;
      self.continueRightTime += 1;
      self.rightWord += 1;
      console.log(self.rightWord);
      self.clearInterval();
      self.curWord.showContent();
      self.curWord.getElement().addClass("option-selected-right");
      /*依赖外界的地方*/
      $(".rightWordNumber").html(self.rightWord);
      // if(self.rightWord >=35){
      //   $("#game-container,.option").unbind();
      //   self.clearInterval();
      //   self.pause();
      //   self.showReport();  //跳到结果页面   
      //   return true;
      // }
      /*依赖外界的地方*/
  	  if(self.topics.length == 0){
			self.pause();
			overDoneAll = true;
            setTimeout(function(){
              self.removePauseBtn();
              self.showReport();
            },500);
  		  return;
  	  }
	  
      var curTimeOut = setTimeout(function(){
        options.forEach(function(x){self.removeWidget(x)});
        self.curWord.removeElement();
        self.curTopic = self.topics.pop();
        self.showTopic(self.curTopic);
        var iDoneTopics = self.wrongTopic.length + self.rightWord;
        var iLevel = parseInt(iDoneTopics / self.curLevelNum);
        if(iLevel > self.maxLevel){
          iLevel = self.maxLevel;
        }
        if(iLevel < 0){
          iLevel = 0;
        }
        self.curLevel = iLevel;
        self.setLevel(self.curLevel);

        window.clearTimeout(curTimeOut);
        curTimeOut = "";
      },100);
    },

    checkResultWrong: function(selectedOption,options){
      var self = this;
      self.curWord.getElement().addClass("option-selected-wrong");
      self.curWord.showContent();
      self.continueRightTime = 0;
      self.clearInterval();
	  
  	  if(self.topics.length == 0){
			self.pause();
			overDoneAll = true;
            setTimeout(function(){
              self.removePauseBtn();
              self.showReport();
            },500);
  		  return;
  	  }
      var curTimeOut = setTimeout(function(){
        options.forEach(function(x){
          x.wrongHtml();
          if(self.wrongTopic.length != rows-1){
            x.setPosition(x.getPosition().x,self.wrongTopic.length);
          }
        });
        self.wrongTopic.push(self.curTopic);
        self.curWord.removeElement();
        if(!self.checkGameOver()){
          self.curTopic = self.topics.pop();
          self.showTopic(self.curTopic);

          var iDoneTopics = self.wrongTopic.length + self.rightWord;
          var iLevel = parseInt(iDoneTopics / self.curLevelNum);
          if(iLevel > self.maxLevel){
            iLevel = self.maxLevel;
          }
          if(iLevel < 0){
            iLevel = 0;
          }
          self.curLevel = iLevel;
          self.setLevel(self.curLevel);
        }
        else
        {
          if(self.DoneWordList.length != 0){
            TopParent.callTop("set_topic_results",JSON.stringify(self.DoneWordList));
            self.DoneWordList = [];
          }
          if(self.rightWord > oldHighScore){
            TopParent.callTop("set_high_score",self.rightWord);
          }
          setTimeout(function(){
            self.removePauseBtn();
            self.showReport();
            self.clearInterval();
          },500);
        }
        window.clearTimeout(curTimeOut);
        curTimeOut = "";
        options.forEach(function(x){x.getElement().html("")});
      },200);
    },

    showReport:function(){
        var self = this;
        var rightNum = self.rightWord;
        var WrongTopic = self.wrongTopic;
        var insistTime=$(".rightWordNumber2").html();
        $(".mycontainer").css("display","none");
        $("#playGround").css("display","none");
		
		//匹配分数段，生成结果        
		var min_config_info = score_config[0]
		var max_config_info = score_config[score_config.length-1]
		var imagebaseurl = "http://baicizhan.qiniucdn.com/games/worddown/img/result/";
		if(rightNum <= min_config_info.max){
            $(".resultMain img").attr("src",imagebaseurl+min_config_info.imagedir+"/"+min_config_info.imagename);
            $(".resultFenShu").html(min_config_info.basescore);
            scoreZone= min_config_info.max;
		}else if(rightNum >= max_config_info.min){
            var tempUrl=imagebaseurl+max_config_info.imagedir+"/"+Math.floor(Math.random()*max_config_info.imagenum)+".png";
            var tempScore=max_config_info.basescore;
            scoreZone="max";
			if(overDoneAll){
				tempUrl=imagebaseurl+"overdone-0.jpg";
				$(".resultMain img").attr("src",tempUrl);
				$(".resultFenShu").html("&nbsp;");
			}else{
	            $(".resultMain img").attr("src",tempUrl);
	            $(".resultFenShu").html(tempScore);
			}
		}else{
			$.each(score_config,function(index,item){
				if(rightNum >= item.min && rightNum <= item.max){
		            var tempUrl=imagebaseurl+item.imagedir+"/"+Math.floor(Math.random()*item.imagenum)+".png";
		            var tempScore= parseInt((item.increase+1)*Math.random())+item.basescore;
		            scoreZone= [item.min,item.max].join("_");
		            $(".resultMain img").attr("src",tempUrl);
		            $(".resultFenShu").html(tempScore);
					return false;
				}
			});
		}
		
		var currentTime = new Date();
		var destTimeStr = "2015-05-16 12:00:00";
		var destTime = new Date(destTimeStr.replace(/\-/g, "/"));
		if(currentTime == destTime){
			$(".resultMain img").attr("src",imagebaseurl+"another.png");
		}
		
        $("#report").css("display","block");
        $(".rightNum").html(rightNum);
        $(".insistTime").html(insistTime);

        $(".list").bind("click touchstart",function(e){
            var ev = e || window.event;
            ev.preventDefault();
            ev.stopPropagation();
//            window.parent.location.href = "/user/topictemplates/4/review"
        });		
		
		 // 出结果页 统计
		 sendStatAjaxRequest(opname,"showreport"+examType);
		 sendStatAjaxRequest(opname,"showreport"+examType+scoreZone.replace("-","_"));
		 
  		 var sdata = {
  			 title: "我在百词斩的单词速降游戏中得了" + $(".resultFenShu").html()+"分，你也来玩吧！",
  			 link: window.location.href,
  			 imgUrl: "http://baicizhan.qiniucdn.com/games/worddown/img/title300.jpg?23123",
  			 success: function(){
		 	// 结果页微信成功分享 统计
		 	    sendStatAjaxRequest(opname,"WXSuccess"+examType);
  			 },
  			 cancel: function(){
			 // 结果页微信取消分享 统计
  				sendStatAjaxRequest(opname,"WXCancel"+examType);
  			 }
  		  };
  		  wx.onMenuShareTimeline(sdata);
	      sdata.desc = "用百词斩突击单词，分数涨涨涨！";
  		  wx.onMenuShareAppMessage(sdata);
		  
        $("#replay").bind("tapone",function(e){
          //重新开始游戏 统计代码
		  sendStatAjaxRequest(opname,"Replay"+examType);
		  
		  if(overDoneAll){
			  window.location.href=window.location.href;
			  return;
		  }
          tapDownTime="";
          tapDownFirst=true;
            $(".index").css("display","block");
            $("#report").css("display","none");
            $(".rightWordNumber2").html("0");
          $("#cet4,#cet6").unbind("tapone");
          $("#cet4,#cet6").bind("tapone click",function(e){
            $(".index").css("display","none");
            $(".mycontainer").css("display","block");
            $(".rightWordNumber2").html("0");
          if(examType!=this.id){
            examType=this.id;
            if(examType=="cet4"){
              topic_objs=cet4Word;
			  examDesc = "四级";
            }else{
               topic_objs=cet6Word;
			   examDesc = "六级";
            }
          }
			//选择四六级 统计代码
			sendStatAjaxRequest(opname,"startgame"+examType);
		  
            var tempUrl="http://baicizhan.qiniucdn.com/games/worddown/img/result/"+examType+".png";
            $('#topbarImg').attr("src",tempUrl);
            var ev = e || window.event;
            ev.preventDefault();
            ev.stopPropagation();
            self.replay();
            $("#cet4,#cet6").unbind();
          });
          $("#replay").unbind();
        });
    },

    checkResult:function(){
      this.removeCurWordAudio();
      $(document).unbind("keydown");
      $(".option").unbind("click");
      $(".option").unbind("tapone");
      $(".option").unbind("touchstart");
      var self = this;
      if(typeof(self.curWord) == "undefined")
      {
        return;
      }
      var curPosition = self.curWord.getPosition();
      var findAnswer = false;
      var selectedOption = "";
      for(var i in self.widgetList)
      {
        var pos = self.widgetList[i].getPosition();
        if(pos.x == curPosition.x && pos.y == curPosition.y)
        {
          selectedOption = self.widgetList[i];
          if(self.widgetList[i].isAnswer)
          {
            findAnswer = true;
          }
        }
      }
      var options = [];
      self.widgetList.forEach(function(x){if(x.getPosition().y == curPosition.y){options.push(x);}});
      /*计算时间*/
      var curTime = new Date();
      var costTime = curTime.getTime() - self.curTopicStartTime;
      var costTime = parseInt(costTime/1000);
      var curData = {};
      /*生成用户做题结果data*/
      curData.topicId = self.curTopic.topicId;
      curData.answer = [{order:0, answer:selectedOption.content, result:findAnswer}];
      curData.usedTime = costTime;
      curData.submitted = true;
      curData.result = findAnswer;
      if(findAnswer){
        curData.accuracy = 100;
        self.checkResultRight(selectedOption,options);
      }
      else
      {
        curData.accuracy = 0;
        self.checkResultWrong(selectedOption,options);
      }
      self.DoneWordList.push(curData);
      self.showLatestWord(self.curTopic);
      self.checkNeedLoadDatas();
    },

    removeCurWordAudio:function(){
      $("#" + this.curTopic.topicId).attr("played",true);
    },

    showLatestWord:function(objData){
      var oLatestTopic = $(".latest-topic");
      oLatestTopic.html("");
      var sWordTxt = objData.topicContent.word;
      var sWordMean = objData.topicContent.wordMean;

      oLatestTopic.append(sWordTxt + " = " + sWordMean);
    },

    checkNeedLoadDatas: function(){
      var self = this;
      if(self.topics.length <= 5){
        var addedTopics ={};
        if(wordListNum==0){
          console.log("没有更多单词啦");
        }
        else{
        var wordUrl="http://baicizhan.qiniucdn.com/games/data/"+examType+"_"+wordListNum+".json";
        $.getJSON(
          wordUrl,
          function(data){
           setNewDatas(data);
           wordListNum--;
           console.log("从服务器上取到值啦");
        });
      }
      }
      else
      {
        console.log("当前不需要跟多数据");
      }
    },
    getTopY:function(){
      var self = this;
      var minY  = rows;
      this.widgetList.forEach(function(x){
        if(x.getPosition().y < minY)
        {
          minY = x.getPosition().y;
        }
      });
      return minY;
    },
    checkGameOver:function(){
      if(this.wrongTopic.length == rows-1){
        return true;
      }
      else
      {
        return false;
      }
    },
    getElement:function(){return $("#"+this.id)},
    setLevel: function(level){
      var self = this;
      self.curLevel = level;
      window.clearInterval(self.timerId);
      var levelbtns = $(".level-btn");
      for(var i = 0 ; i < levelbtns.length ; i++){
        $(levelbtns[i]).find("img").attr("src", "resources/" +  self.levelsDesc[i] + ".png");
        if(i == parseInt(level)){
          $(levelbtns[i]).find("img").attr("src", "resources/" +  self.levelsDesc[i] + "hover.png");
        }
      }
      self.timerId = setInterval(function(){
        if(typeof(self.curWord) == "undefined")
        {
          return;
        }
        var curPosition = self.curWord.getPosition();
        if(curPosition.y == rows-1){
          self.checkResult();
        }
        else
        {
          self.curWord.setPosition(curPosition.x, curPosition.y + 1);
          self.curWord.showContent();
        }
      }, self.timerIntvl - (level* 100));//level间隔
    },

    pause: function(){
      var self = this;
      self.gameStatus = "pause";
      window.clearInterval(self.timerId);
      self.changePauseBtnStyle("pause-controller-pause");
    },

    resume: function(){
      var self = this;
      self.setLevel(self.curLevel);
      self.gameStatus = "playing";
      self.changePauseBtnStyle("pause-controller");
    },

    clearInterval: function(){
      var self = this;
      window.clearInterval(self.timerId);
      self.timerId = "";
    },

    verticalMiddle: function(){
      $(".content").each(function(){
        var fatherHeight = $(this).parent("span")[0].offsetHeight;
        var thisHeight = $(this)[0].offsetHeight;
        var top = (fatherHeight - thisHeight)/2;
        $(this).css("margin-top",top + "px");
      })
    },

    setWordPosition:function(x,y){
      this.curWord.setPosition(x, y);
      this.curWord.removeClickEvent();
    }
  };

  var gameContainer = {};
$("#cet4,#cet6").bind('touchstart',function(){
    var tempUrl="http://baicizhan.qiniucdn.com/games/worddown/img/btn/"+this.id+"_checked.png";
    $("#"+this.id).attr("src",tempUrl);
}); 

$("#cet4,#cet6").bind('touchend',function(){
    var tempUrl="http://baicizhan.qiniucdn.com/games/worddown/img/index/"+this.id+".png";
    $("#"+this.id).attr("src",tempUrl);
}); 

$("#replay,#invite").bind('touchstart',function(){
  var tempUrl="http://baicizhan.qiniucdn.com/games/worddown/img/btn/"+this.id+"2.png";
   $("#"+this.id).attr("src",tempUrl);
});

$("#replay,#invite").bind('touchend',function(){
   var tempUrl="http://baicizhan.qiniucdn.com/games/worddown/img/btn/"+this.id+".png";
   $("#"+this.id).attr("src",tempUrl);
});

$("#invite").bind('tapone',function(){
  //分享提示 统计代码
  sendStatAjaxRequest(opname,"shareclick"+examType);
  $("#cover").css("display","block");
});

$("#cover").bind('tapone',function(){
  $("#cover").css("display","none");
});


$("#cet4,#cet6").bind('tapone',function(){	
    var self=this;
    $(".index").css("display","none");
    $(".mycontainer").css("display","block");


    examType=this.id;
    var tempUrl="http://baicizhan.qiniucdn.com/games/worddown/img/result/"+examType+".png?1212";
    $('#topbarImg').attr("src",tempUrl);
    topicType = TopParent.callTop("get_topic_type","");
    var topics = "";

    /*Mixing*/
    if(examType=="cet4"){
      topic_objs=cet4Word;
	  examDesc = "四级";
    }else{
       topic_objs=cet6Word;
	   examDesc = "六级";
    }
    //测试
    //游戏开始 选择四六级 统计代码
	sendStatAjaxRequest(opname,"startgame"+examType);
    //topic_objs＝[{"topicId":2701,"topicContent":{"wordMean":"123","optionMean2":"2222","optionMean1":"321","word":"disposal","wordAudioURL":""},"resourcesPath":""}]
    var topicsLength = topic_objs.length;
    for(var i in topic_objs){
      var curTopics = topic_objs[i];
      if(curTopics.topicContent.optionMean1 == ""){
        var gotArr = [];
        if(topicsLength-1 < 3){
          gotArr = [0,0]
        }
        else
        {
          var cur_arr = [];
          cur_arr.push(parseInt(i));
          gotArr = gen_random_serials(0, topicsLength-1, 2, cur_arr);
        }
        curTopics.topicContent.optionMean1 = topic_objs[gotArr[0]].topicContent.wordMean;
        curTopics.topicContent.optionMean2 = topic_objs[gotArr[1]].topicContent.wordMean;
      }
      topic_objs[i] = curTopics;
    }

    /*反序*/
    var topic_objReverse = topic_objs.reverse();
    /*取最后15个*/
    var topic_objReList =[];
    for(var i = 0; i < 120; i++){
      if(topic_objReverse.length != 0){
        topic_objReList.push(topic_objReverse.pop());
      }
    }
    /*最后15个排序*/
    var randomNum = gen_random_serials(0,topic_objReList.length,topic_objReList.length,[]);
    for(var i in randomNum) {
      topic_objReverse.push(topic_objReList[randomNum[i]])
    }

    gameContainer = new GameContainer("game-container", topic_objReverse);
    ElementFocus("game-container");

   
    if(document.cookie==""){
      $("#teach").css("display","block");
      $("audio")[0].pause();
      gameContainer.pause();
    }else{
      setInterval(timeIncrease,1000);
    }
    document.cookie="playAlready=true";
    $("#teach").bind("tapone",function(){
      //点击引导 统计代码
	  sendStatAjaxRequest(opname,"guideclick"+examType);
	  
      setTimeout("$('#teach').fadeOut();",500);
       gameContainer.resume();
       $("audio")[0].play();
       setInterval(timeIncrease,1000);
    })
     
  });

$(".optionDiv").bind("tapone",function(e){
  var len=$(".option").length;
  if(this.id=="opDiv1"){
  $(".option")[len-3].click();
  }else if(this.id=="opDiv2")
   $(".option")[len-2].click();
  else{
  $(".option")[len-1].click();
  }
});

$(".downloadTip img").click(function(){
    //点击下载 统计代码
	sendStatAjaxRequest(opname,"download"+examType);
	
    var os = navigator.userAgent;
    if (os.indexOf('Android') > -1 || os.indexOf('Linux') > -1)
    {
      download_android();
    } 
    else if (os.indexOf('iPhone') > -1)
    {
      download_ios();
    }
   });
function download_android(){
      window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.jiongji.andriod.card";
    };

function download_ios(){
      window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.jiongji.andriod.card&g_f=991653";
    };

  /* 自动将焦点放到当前游戏窗口上 */
  var ElementFocus = function(elementId){
    try{
      window.parent.$("iframe").focus();
      $("#" + elementId).focus();
    }
    catch(e){
      console.log("Element Focus error",e.toString())
    }
  };

  function timeIncrease(){
	//计时
	if($(".pause-controller-pause").length > 0){return;}
    var tmpTime=$(".rightWordNumber2").html();
    tmpTime++;
    $(".rightWordNumber2").html(tmpTime);
  }
  /* 从服务器获取数据后的merge */
  var setNewDatas = function(topics){
    var topicsObj = {};
    try{
      topicsObj = topics;
    }
    catch(e){
      console.log("parse topics error!", e.toString());
    }
    if(topicsObj != {}){
      //merger
      var topicsMerged = [];
      var gameContainerTopicsId = [];
      var curDoneTopicsId = [];
      for(var i in gameContainer.DoneWordList){
        curDoneTopicsId.push(gameContainer.DoneWordList[i].topicId);
      }
      for(var i in gameContainer.topics){
        gameContainerTopicsId.push(gameContainer.topics[i].topicId);
      }
      var topicsObjCopy = [];
      topicsObj.forEach(function(topic){
        topicsObjCopy.push(topic);
      });
      var cur_index = topicsObjCopy.length - 1;
      while(topicsObj.length != 0){
        var curTopic = topicsObj.pop();
        if(gameContainerTopicsId.indexOf(curTopic.topicId) == -1 && curDoneTopicsId.indexOf(curTopic.topicId) == -1){
          var cur_arrs = [0,0];
          if(topicsObjCopy.length >= 3)
          {
            cur_arrs = gen_random_serials(0,topicsObjCopy.length - 1, 2, [parseInt(cur_index)]);
          }
          curTopic.topicContent.optionMean1 = topicsObjCopy[cur_arrs[0]].topicContent.wordMean;
          curTopic.topicContent.optionMean2 = topicsObjCopy[cur_arrs[1]].topicContent.wordMean;
          topicsMerged.push(curTopic);
        }
        cur_index -= 1;
      }
      //concact
      var addedTopicsObjReverse = topicsMerged;
      for(var i in gameContainer.topics){
        addedTopicsObjReverse.push(gameContainer.topics[i]);
      }

      var lastFifteenWords = [];
      /*对当前数据进行最后15个的打乱*/
      for(var i = 0 ; i < 120; i++){
        if(addedTopicsObjReverse.length != 0){
          lastFifteenWords.push(addedTopicsObjReverse.pop())
        }
      };
      var randnum = gen_random_serials(0, lastFifteenWords.length, lastFifteenWords.length, []);
      var randnumlength = lastFifteenWords.length;
      for(var i in randnum) {
        var curWords = lastFifteenWords[randnum[i]];
        if (curWords.topicContent.optionMean1 == "") {
          var gotNum = [0, 0];
          if (randnumlength >= 3) {
            gotNum = gen_random_serials(0, randnumlength - 1, 2, [randnum[i]]);
          }
          curWords.topicContent.optionMean1 = lastFifteenWords[gotNum[0]].topicContent.wordMean;
          curWords.topicContent.optionMean2 = lastFifteenWords[gotNum[1]].topicContent.wordMean;
        }
        addedTopicsObjReverse.push(curWords);
      }

      /* end 对当前数据进行最后15个的打乱*/
      gameContainer.topics = addedTopicsObjReverse;
    }
    else
    {
      alert("当前没有更多单词!");
    }
  };
var rows = 20;
//原型继承
var extend = function(Child, Parent){
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
};


var StaticLabel = function(container, id)
{
  this.init(container, id);
};

StaticLabel.prototype = {
  type:"static-label",
  maxId:0,
  init:function(container){
    this.container = container;
    this.id = this.genAutoId();
    this.appendElement();
  },
  afterInit:function(){
    var iWidth = this.container.getElement().width() / 3;
    var iHeight = this.container.getElement().height() / rows;
    this.getElement().css({"height":iHeight,"width":iWidth});
  },
  genAutoId:function(){
    return this.type + "-" + StaticLabel.prototype.maxId++;
  },

  removeElement:function(){
    this.getElement().remove();
  },
  getElement:function(){
    return $("#"+this.id);
  },
  setContent:function(content){
    this.content = content;
    this.getElement().html("<span class='content'>" + this.content + "</span> ");
  },
  hideContent:function(){
  //  this.getElement().children().css("visibility","hidden");
  },

  showContent:function(){
    this.getElement().children().css("visibility","visible");
  },

  setPosition:function(x,y){
    var iWidth = this.container.getElement().width()/3;
    var iHeight = this.container.getElement().height()/rows;
    this.getElement().css("left",x*iWidth);
    this.getElement().css("top",y*iHeight);
  },

  getPosition:function(){
    var iWidth = this.container.getElement().width()/3;
    var iHeight = this.container.getElement().height()/rows;

    var left = this.getElement().css("left");
    var top = this.getElement().css("top");

    left = left.substr(0,left.length - 2);
    top = top.substr(0, top.length - 2);

    //如果是auto的情况下则 令其为 0
    if(left == "au"){
      left = "0";
    }

    if(top == "au"){
      top = "0";
    }
    var position = {
      x: Math.round(parseInt(left)/iWidth),
      y: Math.round(parseInt(top)/iHeight)
    };
    return position;
  },

  appendElement:function(){
    var html = this.genHtml();

    this.container.getElement().append(html);
  }
};

var Word = function(container,topicId){
  this.init(container,topicId);
  this.afterInit();
};
extend(Word, StaticLabel);

$.extend(Word.prototype,{
  type: "word",
  init:function(container,topicId){
    this.container = container;
    this.id = this.genAutoId();
    this.topicId = topicId;
    this.appendElement();
  },

  genHtml:function(){
    var html = "<span id='"+this.id+"' class='word'></span>";
    return html;
  },

  appendElement: function() {
    var self = this;
    var html = this.genHtml();
    this.container.getElement().append(html);
    this.getElement().bind("click", function (e) {
      var ev = e || window.event;
      ev.preventDefault();
      ev.stopPropagation();
      self.showContent();

      preloadAllAudio();
      $("#" + self.topicId).trigger("play");
    })
  },
  removeClickEvent:function(){
    this.getElement().unbind("click");
  }
});

var Option = function(container){
  this.init(container);
  this.afterInit();
  this.isAnswer = false;
};

extend(Option, StaticLabel);

$.extend(Option.prototype,{
  type: "option",
  setAnser:function(isAns){
    this.isAnswer = isAns;
  },

  genHtml:function(){
    var html = "<span id='"+this.id+"' class='option'></span>";
    return html;
  },

  wrongHtml:function(){
    this.getElement().addClass("selected-wrong-top");
  },

  getPosition:function(){
    var iWidth = this.container.getElement().width()/3;
    var iHeight = this.container.getElement().height()/rows;

    var left = this.getElement().css("left");
    var top = this.getElement().css("top");

    left = left.substr(0,left.length - 2);
    top = top.substr(0, top.length - 2);

    //如果是auto的情况下则 令其为 0
    if(left == "au"){
      left = "0";
    }

    if(top == "au"){
      top = "0";
    }

    var position = {
      x: Math.round(parseInt(left)/iWidth),
      y: Math.round(parseInt(top)/iHeight)
    };
    return position;
  },

  selected:function(){
     /*for(var i in this.container.widgetList){
        this.container.widgetList[i].getElement().css("border","solid 2px #FFFFFF");
     }
     this.getElement().css("border","solid 2px #707070");*/
  },
  setContent:function(content){
    var self = this;
    this.content = content;
    this.getElement().html("<span class='content'>" + this.content + "</span> ");
    setTimeout(function(){
      self.bindClickEvent();
    },500);
  },

  bindClickEvent:function(){
    var self = this;
    this.getElement().bind("tapone click",function(e){
      var ev = e || window.event;
      ev.stopPropagation();
      ev.preventDefault();
      var iX = self.getPosition().x;
      self.container.setWordPosition(iX,rows-1);
      self.container.checkResult();
      if(self.container.gameStatus == "pause"){
          self.container.resume();
      }
      preloadAllAudio();
      $(this).unbind("tapone click");
    });
  }
});

$(function(){
	// pageloading 统计
	sendStatAjaxRequest(opname,"");
	
	$.ajax({
			  type: 'get',
			  url: "/api/weixin/jssdk/config.json",
			  data: {share_url :window.location.href},
			  dataType: "json",
			  success: function(data){
				 var signPackage = data
			   	 wx.config({
			   		 debug: false,
			   		 appId: "wxcfbbac84baa7a51b",
			   		 timestamp: signPackage.timestamp,
			   		 nonceStr: signPackage.nonceStr,
			   		 signature: signPackage.signature,
			   		 jsApiList: ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage']
			   	    });
		     }
		 });
	 
   	 wx.ready(function(){
		 wx.checkJsApi({
		             jsApiList: ['onMenuShareTimeline',"onMenuShareAppMessage"]
		         });
   		 var sdata = {
   			 title: document.title,
   			 link: window.location.href,
   			 imgUrl: "http://baicizhan.qiniucdn.com/games/worddown/img/title300.jpg?12312",
   			 success: function(){
			 	// 微信成功分享 统计
			 	sendStatAjaxRequest(opname,"WeixinShareSuccess");
   			 },
   			 cancel: function(){
				 // 微信取消分享 统计
   				 sendStatAjaxRequest(opname,"WeixinShareCancel");
   			 }
   		  };
   		  wx.onMenuShareTimeline(sdata);
		  sdata.desc = "用百词斩突击单词，分数涨涨涨！";
   		  wx.onMenuShareAppMessage(sdata);
   	 });
});


