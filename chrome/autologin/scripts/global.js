


var globalAutologinHandler = {
	doc:null ,
	initialized:false,
	autologinList:null,	
	autologinXMLList:null,
	autologinsites:[],
	lastloggedInDomain:null,	
	lastloggedInTimeinMilliseconds:0,
	
	blacklistDomains:new Array(),
	loggedIn:true,
	
	testmigrate:function(){
	
	var rawxml='<root> <site> <url>https://mail.three.co.uk/owa/auth/logon.aspx</url> <loginurl>https://mail.three.co.uk/owa/auth/logon.aspx</loginurl> <username>hutchison3g\mnavaneethakrishnan</username> <password>June#2015</password> <userelement>username</userelement> <pwdelement>password</pwdelement> <enabled>true</enabled><btnelement/> <formelement>logonForm</formelement> </site> <site> <url>https://webmail.tcs.com/</url> <loginurl>https://webmail.tcs.com/</loginurl> <username>muthukumaran n</username> <password>Yluj31#2015</password> <userelement>Username</userelement> <pwdelement>Password</pwdelement> <enabled>true</enabled><btnelement>mybutton</btnelement> <formelement>_TCSLoginUserForm</formelement> </site> <site> <url>https://inchnm04.tcs.com/mail/mail2/152656.nsf</url> <loginurl>https://inchnm04.tcs.com/mail/mail2/152656.nsf</loginurl> <username>muthukumaran n</username> <password>Yluj31#2015</password> <userelement>Username</userelement> <pwdelement>Password</pwdelement> <enabled>true</enabled><btnelement>mybutton</btnelement> <formelement>_TCSLoginUserForm</formelement> </site> <site> <url>https://github.com/login</url> <loginurl>https://github.com/login</loginurl> <username>muthuishere@gmail.com</username> <password>Gangster1</password> <userelement>login</userelement> <pwdelement>password</pwdelement> <enabled>true</enabled><btnelement>commit</btnelement> <formelement/> </site> <site> <url>http://idmssop01.at.three.com/sso/pages/login.jsp</url> <loginurl>http://idmssop01.at.three.com/sso/pages/login.jsp</loginurl> <username>mnavaneethakrishnan@corpuk.net</username> <password>April#2015</password> <userelement>ssousername</userelement> <pwdelement>password</pwdelement> <enabled>true</enabled><btnelement/> <formelement/> </site> <site> <url>https://www.odesk.com/login</url> <loginurl>https://www.odesk.com/login</loginurl> <username>muthukumaran</username> <password>Gangster1</password> <userelement>username</userelement> <pwdelement>password</pwdelement> <enabled>true</enabled><btnelement>submit</btnelement> <formelement>login</formelement> </site>  <site> <url>https://dev.intently.com/login.html</url> <loginurl>https://dev.intently.com/login.html</loginurl> <username>muthuishere@gmail.com</username> <password>Gangster1</password> <userelement>email</userelement> <pwdelement>password</pwdelement> <enabled>true</enabled><btnelement/> <formelement>login-form</formelement> </site>  <site> <url>https://bitbucket.org/account/signin/</url> <loginurl>https://bitbucket.org/account/signin/</loginurl> <username>muthuishere</username> <password>Gangster1</password> <userelement>username</userelement> <pwdelement>password</pwdelement> <enabled>true</enabled><btnelement/> <formelement>login-form</formelement> </site> <site> <url>https://ebiz.corpuk.net:16017/OA_HTML/AppsLocalLogin.jsp</url> <loginurl>https://ebiz.corpuk.net:16017/OA_HTML/AppsLocalLogin.jsp</loginurl> <username>mnavaneethakrishnan@corpuk.net</username> <password>May1#2015</password> <userelement>username</userelement> <pwdelement>password</pwdelement> <enabled>true</enabled><btnelement/> <formelement>myForm</formelement> </site> <site> <url>https://www.upwork.com/login</url> <loginurl>https://www.upwork.com/login</loginurl> <username>muthukumaran</username> <password>Gangster1</password> <userelement>username</userelement> <pwdelement>password</pwdelement> <enabled>true</enabled><btnelement>submit</btnelement> <formelement>login</formelement> </site> <site> <url>https://mail.google.com/mail/u/0/</url> <loginurl>https://mail.google.com/mail/u/0/</loginurl> <username>muthu</username> <password/> <userelement>cfsl</userelement> <pwdelement>cfsw</pwdelement> <enabled>true</enabled><btnelement>focus</btnelement> <formelement>mainForm</formelement> </site></root>'
	
	localStorage["autologinxml"]=Helper.encrypt(rawxml)
	
	
	},
	test:function(){
		
		var rawxml='<root><site authtype="form"><url>http://localhost:9999/auto.html</url> <loginurl>http://localhost:9999/auto.html</loginurl><enabled>true</enabled><elements><element><event/><xpath>//input[contains(@id,"Username") or contains(@name,"Username")]</xpath><value>example@gmail.com</value><type>text</type></element><element><event/><xpath>//input[contains(@id,"Password") or contains(@name,"Password")]</xpath><value>123456</value><type>password</type></element><element><event>click</event><xpath>//*[contains(@id,"mybutton") or contains(@name,"mybutton")]</xpath><value></value><type>button</type></element><element><event>submit</event><xpath>//*[contains(@id,"_TCSLoginUserForm") or contains(@name,"_TCSLoginUserForm")]</xpath><value></value><type>form</type></element></elements></site><site authtype="form"><url>https://github.com/login</url> <loginurl>https://github.com/login</loginurl><enabled>true</enabled><elements><element><event/><xpath>//input[contains(@id,"login") or contains(@name,"login")]</xpath><value>muthuishere@gmail.com</value><type>text</type></element><element><event/><xpath>//input[contains(@id,"password") or contains(@name,"password")]</xpath><value>Gangster1</value><type>password</type></element><element><event>click</event><xpath>//*[contains(@id,"commit") or contains(@name,"commit")]</xpath><value></value><type>button</type></element></elements></site><site authtype="form"><url>http://127.0.0.1:9999/auto.html</url> <loginurl>http://127.0.0.1:9999/auto.html</loginurl><enabled>true</enabled><elements><element><event/><xpath>//input[contains(@id,"Username") or contains(@name,"Username")]</xpath><value>user</value><type>text</type></element><element><event/><xpath>//input[contains(@id,"Password") or contains(@name,"Password")]</xpath><value>password</value><type>password</type></element><element><event>click</event><xpath>//*[contains(@id,"mybutton") or contains(@name,"mybutton")]</xpath><value></value><type>button</type></element><element><event>submit</event><xpath>//*[contains(@id,"_TCSLoginUserForm") or contains(@name,"_TCSLoginUserForm")]</xpath><value></value><type>form</type></element></elements></site></root>'
		
		localStorage["autologinxml"]=Helper.encrypt(rawxml)
		
	},

	
	
	printraw:function(){
		
		var rawxml=Helper.decrypt(localStorage["autologinxml"])
		console.log(rawxml)
	},	
	addAutoLoginElements:function(obj,authtype){
	


				//find user
				
				
		
			var elems=obj.elements
			
			var username=""
			for (index = 0, len = elems.length; index < len; ++index) {
			
			
			var field=elems[index]
			
			 if(field.type === "text"  ){
					  
						if( username !== ""){
						
								if(field.value != "" && (field.xpath.toLowerCase().indexOf("user") >=0 ||  field.xpath.toLowerCase().indexOf("email") >=0 || field.xpath.toLowerCase().indexOf("login") >=0 )){
									username= field.value
								}
								
						}else{
							username= field.value
						  }
					 }
					 
				
			}
			
			
			obj.user=username
			obj.authtype=authtype
	
			//checkuser already exists , if yes update
			
						storage.add(obj)
				
			
				//else
				
				//add
				
	
	},
	
		
			
	updateBasicAuthHandlers:function(){
	
		
		var usebasicauth= (localStorage["usebasicauth"] === 'true')
			if(usebasicauth){
			
			
				chrome.webRequest.onAuthRequired.addListener(globalAutologinHandler.retrieveautologinsites, {
						urls : ["http://*/*","https://*/*"]
						}, ['asyncBlocking']);
		
			}else{
					chrome.webRequest.onAuthRequired.removeListener(globalAutologinHandler.retrieveautologinsites)
			}
	
	},	

  startsWith:function (data,str) {
        return !data.indexOf(str);
    },
  canSubmit:function(curlocation) {
  

  var curdomainName=Utils.getdomainName(curlocation)
	var curTimeinMs=Date.now()
	
	var timedifference=curTimeinMs -  globalAutologinHandler.lastloggedInTimeinMilliseconds
	var MAX_ALLOWED_TIME_DIFFERENCE=60 *1000
	
  if(null != globalAutologinHandler.lastloggedInDomain  && curdomainName == globalAutologinHandler.lastloggedInDomain   &&  timedifference <  MAX_ALLOWED_TIME_DIFFERENCE){
  globalAutologinHandler.blacklistDomains.push(curdomainName)
  return false
  }
  return true
  
  },
  updateSuccessLogin: function(curlocation) {
  var curdomainName=Utils.getdomainName(curlocation)
  var curTimeinMs=Date.now()
  globalAutologinHandler.lastloggedInDomain=curdomainName
  globalAutologinHandler.lastloggedInTimeinMilliseconds=curTimeinMs;
  
  //console.log("Updating Success Login for domain" + globalAutologinHandler.lastloggedInDomain + " at time" + globalAutologinHandler.lastloggedInTimeinMilliseconds)
  
  
  },
  
  
  
   retrieveSiteInfo: function(curlocation) {
   
   var result={}
   result.status=1;
   result.info=null;
   
   
   var curdomainName=Utils.getdomainName(curlocation)
	var site=storage.get("form",curdomainName)
 
		if(site== null){
		
			return result;
		}
    
	var flgAutologinEnabled=site.enabled;
	result.info=site;
	
	if( flgAutologinEnabled == true && globalAutologinHandler.blacklistDomains.indexOf(curdomainName) == -1 )  {
	
		result.status=0;
		
		return result;
		
		
	
	}
	if(globalAutologinHandler.blacklistDomains.indexOf(curdomainName) != -1){
		
		console.log("Blacklisted domain" + curdomainName)	
		result.status=-1;
		//return result;
		
	
	}
	
	if(flgAutologinEnabled == false){
	
		console.log("Disabled domain" + curdomainName)	
		result.status=-1;
		//return result;
		
	}
	
	return result;
	
	
   },

	logmessage:function(aMessage) {


//  alert(aMessage)

//console.log(aMessage)

	
},



removeSite:function(autologinRawXML){
		
   var parser = new DOMParser();
   var autologinObject = parser.parseFromString(autologinRawXML, "text/xml");
   
	return globalAutologinHandler.removeSiteObject(autologinObject)
},

removeSiteObject:function(autologinObject){
	
	console.log("=====================")
	console.log(autologinObject)
   var currentURL= globalAutologinHandler.getXMLElementval(autologinObject,"loginurl")

   authtype=autologinObject.getElementsByTagName("site")[0].getAttribute("authtype")
		//authtype= autologinObject.firstChild.getAttribute("authtype")
   console.log("==== END  =================")


	
		try{


var divs = globalAutologinHandler.autologinXMLList.getElementsByTagName("site"), i=divs.length;
  
  if(i == 0)
	  return false;

while (i--) {
			
		
		iurl=globalAutologinHandler.getXMLElementval(divs[i],"loginurl");
		
		if(Utils.getdomainName(currentURL) == Utils.getdomainName(iurl)  && authtype ==  divs[i].getAttribute("authtype") ){
					//alert(divs[i].url)
						 // return divs[i];
						 
						 //remove site
						  divs[i].parentNode.removeChild(divs[i]);
						   
		
						  return true;
						  
		}
						  

		}

		 }catch(exception){
			 
			console.log("Issue" + exception) 

		 }

			return false;

	},
	
	getXMLElementval:function(node,elemName){
		
		try{
			val= node.getElementsByTagName(elemName)[0].firstChild.nodeValue;
			return val
		}catch(exception){
			return "";	
		}
	},
	
	/*
	  
	  set autologinXMLList
	  genrate  jsonlist
	  
	*/
	loadXMLDoc:function(dname) { 


	  xhttp=new XMLHttpRequest(); 

	xhttp.open("GET",dname,false); 
	xhttp.send(); 
	
	
	localStorage["autologinxml"] =Helper.encrypt(xhttp.responseText);
	//globalAutologinHandler.loadDoc();
	}, 
	/*
	  Load details from storage  to xml
	*/
	
	try_count : 0,
	last_request_id:null,
	last_tab_id:null,
	authcallback:null,	
	authdetails:null,
	authretrycount:0,
	popupopened:false,
	sendauthautologinsites:function(status,credential,callback){
		
		
	//if(globalAutologinHandler.popupopened)
		//globalAutologinHandler.popupopened=false
		
		if (status.requestId == globalAutologinHandler.last_request_id && status.tabId == globalAutologinHandler.last_tab_id) {
					++globalAutologinHandler.try_count;
					console.log("increment try count")
						//globalAutologinHandler.retrieveautologinsites(status,callback)
					
				} else {
					globalAutologinHandler.try_count = 0;
					console.log("increment try count again")
				}

				if (globalAutologinHandler.try_count < 3) {

				//	console.log("try_count" + globalAutologinHandler.try_count)
					globalAutologinHandler.last_request_id = status.requestId;
					globalAutologinHandler.last_tab_id = status.tabId;
					
						console.log("Sending data to page " ,globalAutologinHandler.try_count,credential )
					callback({authautologinsites: {username: credential.username, password: credential.password}});	
					
				}else{
				
				//remove autologin credential and send cancel status
					if(credential.input ==="autologin"){
						
						//One more 
						
					//	globalAutologinHandler.try_count--;
						//console.log(credential)
						globalAutologinHandler.deleteauth(credential.sitedata)
						//globalAutologinHandler.retrieveautologinsites(status,callback)
						
					}
					
						globalAutologinHandler.cancelauth(status,callback)
					
					
				}
		
					
	},
	deleteauth:function(sitedata){
		
		removeResponse=storage.remove(sitedata)
		
	
	
	},
	cancelauth:function(details,callback){
		callback({cancel: true});
		globalAutologinHandler.try_count = 0;
		
	},
	authclientcallback:null,	
	retrieveautologinsites : function (details, callback) {
		
		
			
			
			
			
		var status=details
		var url = status.challenger.host;
		console.log("auth required")
		console.log(status)
		
		//TODO check url has authorization autologinsites in storage or user has set authorization autologinsites
		
		 var site=storage.get("basic",url)
		 
		
		
		var curdomainName=status.challenger.host
		
		
				
		if (site != null ) {

		var credential = {};
		credential.username = ""
		credential.passwords = ""
		
			var elems=site.elements
			credential.sitedata=site
			var username=""
			for (index = 0, len = elems.length; index < len; ++index) {
			
				var field=elems[index]
				
					if(field.type === "password"){
						 credential.password= field.value
						
					 }
					 
					  if(field.type === "text"){
						 credential.username= field.value
						
					 }
					
					credential.input="autologin"
					
			
			}
		//domainxml get username password
			
			//credential.username = "mnavaneethakrishnan@corpuk.net"
				//credential.password = "July#2015"
				if(credential.username !== "" && credential.password !== "" ){
					globalAutologinHandler.authcallback=null;
					globalAutologinHandler.authdetails=null
					
					//TODO show popup to retrieve autologin credential
					console.log("authentication sent from storage ",credential,status,domainxml)
					globalAutologinHandler.sendauthautologinsites(status,credential,callback)
					
					return;
					}
			
		}
		
		if(globalAutologinHandler.popupopened){
				
				callback({cancel: true});
				return;
		}
			
			
		globalAutologinHandler.popupopened=true
		
		console.log("setting status ")
		globalAutologinHandler.authcallback=callback;
		globalAutologinHandler.authdetails=status
		
		
				
				
				console.log("creating popup")
				
				
				globalAutologinHandler.authdetails.sitedata={}
				globalAutologinHandler.authdetails.sitedata.authtype="basic"
				globalAutologinHandler.authdetails.sitedata.url=curdomainName
				globalAutologinHandler.authdetails.sitedata.loginurl=curdomainName
				globalAutologinHandler.authdetails.sitedata.user=""
				globalAutologinHandler.authdetails.sitedata.elements=[]
				
				var elem={}
					elem.type="text"
					elem.value=""
					elem.event=""
					elem.xpath="username"
					
				globalAutologinHandler.authdetails.sitedata.elements.push(elem)
				elem={}
					elem.type="password"
					elem.value=""
					elem.event=""
					elem.xpath="password"
					globalAutologinHandler.authdetails.sitedata.elements.push(elem)
					
					
				//TODO handle close
				chrome.windows.create({
					type: 'popup',
					 focused: true,
					url: chrome.extension.getURL('auth.html'),
					height: 450, width:450
				
				
				}, function(win) {
					
					console.log("window id" ,win.id)
					
					
				});
				
				
				/*
				chrome.tabs.getSelected(null,function(tab) {
					var tablink = tab.url;
					
						if(tab.url.indexOf("chrome") >=0){
							if(null != globalAutologinHandler.authclientcallback)
								globalAutologinHandler.authclientcallback({"valid":false,"message":"Invalid autologinsites"});	
							else{
								
								alert("Invalid page")
								
							}
							
							
						}else{
								chrome.tabs.executeScript(null, {file:"scripts/autoLoginAuth.js"}, function() {
									
								});
						}		
					});
			*/
			
			
					
			
				
					
				
		

		
	},
	
	initExtension:function() { 
	
	//validate and set logged in
	storage.init()
	var credential=localStorage["credential"]
	var promptrequired=localStorage["promptrequired"]
	
	if(undefined == credential || null == credential || undefined == promptrequired || null == promptrequired ||  promptrequired === 'false')
		globalAutologinHandler.loggedIn=true
	else
			globalAutologinHandler.loggedIn=false
			
		

		
		globalAutologinHandler.updateBasicAuthHandlers()
		
			console.log("globalAutologinHandler.loggedIn" +globalAutologinHandler.loggedIn);
			
	//globalAutologinHandler.loadDoc( )
	
	
	}
	
			
	



  

	 
	
};

var Utils={

	getdomainName:function(str){
		if(str.indexOf("http") != 0 && str.indexOf("www")!=0)
			return str
		
			var    a      = document.createElement('a');
			 a.href = str;
			return a.hostname
	}

};


  var PageActionHandler = {
  
  
	setCaptureInProgress:function(tab){
		
		var domainName=Utils.getdomainName(tab.url)
		
		chrome.pageAction.setIcon({tabId:tab.id,path:"images/autologin-19-capture.png"} , function() {
		
				chrome.pageAction.setTitle({tabId :tab.id,title:"Capture in progress for" + domainName})
				
				chrome.tabs.executeScript(tab.id, {code:"initAutoLoginCapture()",allFrames :false}, function() {
						//script injected
				});
		
		})
		
	},
	setCaptureReady:function( tab){
		
		var domainName=Utils.getdomainName(tab.url)
		chrome.pageAction.setIcon({tabId :tab.id,path:"images/autologin-19.png"} , function() {
		
		
				chrome.pageAction.setTitle({tabId :tab.id,title:"Add AutoLogin for " +domainName })
				
				
				chrome.tabs.executeScript(tab.id, {code:"removeAutoLoginCapture()",allFrames :false}, function() {
				//script injected
				});
				
		
		})
		
	},
	handleClick:function(tab){
	

		chrome.pageAction.getTitle({tabId :tab.id}, function (result){
			if(result.indexOf("Add AutoLogin") >=0){
				//
				PageActionHandler.setCaptureInProgress(tab)
			}else{
				PageActionHandler.setCaptureReady(tab)
			
			}

		});

	

	
	},
	injectscripts:function(obj,index){
		
		var tabId=obj.tabId
		var scripts=obj.scripts
		var callback=obj.callback
		
		
		
		
		if(index >= scripts.length){
			obj.callback()
			
			}
		
		chrome.tabs.executeScript(tabId, {file:scripts[index]}, function() {
						//script injected
						index++
						PageActionHandler.injectscripts(obj,index)
					});
					
					
	}
  
  };

//globalAutologinHandler.loadXMLDoc(chrome.extension.getURL('autologin.xml'))

globalAutologinHandler.initExtension()
globalAutologinHandler.printraw()

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
 
    if(tab.url !== undefined && changeInfo.status == "complete" ){
	
	 if(tab.url.indexOf("http") == 0 || tab.url.indexOf("www") == 0  ){
	  
			
		}else{
			return;
		}
  
  var  siteInfo = globalAutologinHandler.retrieveSiteInfo(tab.url)
	var status=siteInfo.status
	
	//console.log("tab check",siteInfo,globalAutologinHandler.loggedIn)
	
		if(  status == 0) {
		
			if(globalAutologinHandler.loggedIn==false){
			
				chrome.tabs.executeScript(tabId, {file:"scripts/autoLoginCredentials.js"}, function(details) {
						//script injected
						console.log("Inserted autoLoginCredentials")
					});
				
			}else{
			
			var jscode='var extnid="'+ chrome.extension.getURL("/") + '"';
		
		
			chrome.tabs.executeScript(tabId, {code:jscode,allFrames :false}, function() {
						chrome.tabs.executeScript(tabId, {file:"scripts/userselect.js"}, function() {
							
							chrome.tabs.executeScript(tabId, {file:"scripts/autoLogin.js"}, function() {
										//script injected
										console.log("Inserted autoLogin")
									});
						
						});
					})
			
			}
		//}else if( status == 1 ) {
		}else{
		
		//console.log("got complete")
			var jscode='var extnid="'+ chrome.extension.getURL("/") + '"';
		
		
			chrome.tabs.executeScript(tabId, {code:jscode,allFrames :false}, function() {
						//script injected
						
			
						chrome.tabs.executeScript(tabId, {file:"scripts/autoLoginCaptureIcon.js"}, function() {
					
								
								chrome.tabs.executeScript(tabId, {file:"scripts/autoLoginCapture.js"}, function() {
									//script injected
								//	console.log("got autoLoginCapture" +tabId)
								});
						
						}); 
						
						
			
				});
				
				
			
		}
	}
});



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // console.log(sender.tab ?
                // "from a content script:" + sender.tab.url :
                // "from the extension");
				
				
	 if (request.action == "captureautologin"){
	
			PageActionHandler.setCaptureReady(sender.tab)
			chrome.pageAction.show(sender.tab.id);
			 // Return nothing to let the connection be cleaned up.
		  sendResponse({});
	
	
	}else if (request.action == "getData"){
	
	
			var site= storage.get("form",request.domain)
			
			sendResponse({"site": site});
	
	
	}else if (request.action == "injectAutoLogin"){
	
	
			chrome.tabs.executeScript(sender.tab.id, {file:"scripts/autoLogin.js"}, function() {
					//script injected
				});
			
		sendResponse({"valid":true});
	
	
	
	}else if (request.action == "getauthinfo"){
	
	
	var data={}
	data.valid=false;
	
		if( globalAutologinHandler.authdetails){
				data.valid=true;
			data.realm=globalAutologinHandler.authdetails.realm;
			
			if(globalAutologinHandler.authdetails.isProxy){
				data.url=globalAutologinHandler.authdetails.challenger.host + ":" + globalAutologinHandler.authdetails.challenger.port 
			}else
				data.url=globalAutologinHandler.authdetails.url
		}
			
		sendResponse(data);
	
	
	
	}else if (request.action == "basicauth"){
	
	
			globalAutologinHandler.popupopened=false
			var data=request.info;
			console.log("Basic auth details received",data)
			if(data.cancel){
				
				//remove iframe on current tab
				//send cancel event 
				
				globalAutologinHandler.cancelauth(globalAutologinHandler.authdetails,globalAutologinHandler.authcallback)
				sendResponse({"valid":true});	
				globalAutologinHandler.authclientcallback=null;
			}else{
				
				
				data.input="dialog"
				
				
				
					//globalAutologinHandler.addAutoLoginElements(request.info,"form")
					
	
				globalAutologinHandler.authclientcallback=sendResponse
				
				if(data.useAutologin &&  globalAutologinHandler.authdetails && globalAutologinHandler.authdetails.sitedata){
				
					console.log("saving autologin")
					console.log(globalAutologinHandler.authdetails)
						for(k=0;k<globalAutologinHandler.authdetails.sitedata.elements.length;k++){
							
							var elem=globalAutologinHandler.authdetails.sitedata.elements[k]
							if(elem.type=="text"){
								
								globalAutologinHandler.authdetails.sitedata.elements[k].value=data.username
							}
							if(elem.type=="password"){
								
								globalAutologinHandler.authdetails.sitedata.elements[k].value=data.password
							}
							
						}
						
						console.log("Adding data")
						console.log(globalAutologinHandler.authdetails.sitedata)
					globalAutologinHandler.addAutoLoginElements(globalAutologinHandler.authdetails.sitedata,"basic")
				}
				
				
				globalAutologinHandler.sendauthautologinsites(globalAutologinHandler.authdetails,data,globalAutologinHandler.authcallback)
				sendResponse({"valid":true});	
					
				//sendResponse({"valid":true});	
				
				
				
				
				
			}
			
			
			
	
	
	}else if (request.action == "validateCredential"){
	
			var userCredential=request.info;
			
			var savedCredential= Helper.decrypt(localStorage["credential"] );
			
	
			if(userCredential == savedCredential){
			
			globalAutologinHandler.loggedIn=true
			
			sendResponse({"valid":true});
			}
				
			else{
			globalAutologinHandler.loggedIn=false;
				sendResponse({"valid":false });
				}
	
	
	}else if (request.action == "addCredential"){
	
			var credential=request.info;
			
			localStorage["credential"]= Helper.encrypt(credential);
			
				sendResponse({"valid":true });
			
	
	
	}else if (request.action == "updateCredential"){
	
			var credential=request.currentCredential;
			
			var newCredential=request.newCredential;
			
			var savedCredential= Helper.decrypt(localStorage["credential"] );
			
			if(credential == savedCredential){
				localStorage["credential"]= Helper.encrypt(newCredential);
				sendResponse({"valid":"true" });
				}
			else
				sendResponse({"valid":"false" });
			
	
	
	}else if (request.action == "getPromptAtStartup"){
	
			
			promptrequired=localStorage["promptrequired"]
			
			
				sendResponse({"promptrequired":(promptrequired === 'true') });
			
	
	
	}else if (request.action == "updatePromptAtStartup"){
	
			
			
			localStorage["promptrequired"]= request.promptrequired;
			
			
			
				sendResponse({"valid":true });
			
	
	
	}else if (request.action == "updateBasicAuthHandlers"){
	
		
			localStorage["usebasicauth"]= request.usebasicAuth;
			globalAutologinHandler.updateBasicAuthHandlers()
				sendResponse({"valid":true });
			
	
	
	}else if (request.action == "hasCredential"){
	
			
			
			var savedCredential= Helper.decrypt(localStorage["credential"] );
			
			var result=(savedCredential != "")
			console.log("result",result)
				sendResponse({"valid":result});
			
	
	}else if (request.action == "refreshData"){
	
	globalAutologinHandler.loadDoc()
			
	sendResponse({});
	
	
	}else if (request.action == "cansubmit"){
	
	
	var flgResponse=globalAutologinHandler.canSubmit(sender.tab.url)
	
	if(flgResponse == true)
		globalAutologinHandler.updateSuccessLogin(sender.tab.url)
		
	sendResponse({actionresponse: flgResponse});
	
	
	}else if (request.action == "addAutoLoginFormElements"){
	
	
	globalAutologinHandler.addAutoLoginElements(request.info,"form")
	
		
	sendResponse({});
	
	
	}else if (request.action == "success"){
	
	globalAutologinHandler.updateSuccessLogin(sender.tab.url)
	sendResponse({actionresponse: "success"});
	}
     
  });
  
  

chrome.runtime.onInstalled.addListener(function(details){
    if(details.reason == "install"){
        console.log("This is a first install!");
		
		localStorage["usebasicauth"] =true
		localStorage["usedefaultautologin"] =true
		
    }else if(details.reason == "update"){
			console.log("migrating")
			
        var thisVersion = chrome.runtime.getManifest().version;
		storage.migrateautologinsites()      
    }
});
