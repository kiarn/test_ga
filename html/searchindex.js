Search.setIndex({docnames:["index","python/lmn_auth","python/lmn_common","python/lmn_devices","python/lmn_groupmembership","python/lmn_landingpage","python/lmn_linbo","python/lmn_quotas","python/lmn_session","python/lmn_settings","python/lmn_setup_wizard","python/lmn_users"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","python/lmn_auth.rst","python/lmn_common.rst","python/lmn_devices.rst","python/lmn_groupmembership.rst","python/lmn_landingpage.rst","python/lmn_linbo.rst","python/lmn_quotas.rst","python/lmn_session.rst","python/lmn_settings.rst","python/lmn_setup_wizard.rst","python/lmn_users.rst"],objects:{"aj.plugins.lmn_auth":{api:[1,0,0,"-"],views:[1,0,0,"-"]},"aj.plugins.lmn_auth.api":{LMAuthenticationProvider:[1,1,1,""],UserLdapConfig:[1,1,1,""]},"aj.plugins.lmn_auth.api.LMAuthenticationProvider":{authenticate:[1,2,1,""],authorize:[1,2,1,""],change_password:[1,2,1,""],get_isolation_gid:[1,2,1,""],get_isolation_uid:[1,2,1,""],get_profile:[1,2,1,""]},"aj.plugins.lmn_auth.api.UserLdapConfig":{harden:[1,2,1,""],load:[1,2,1,""],save:[1,2,1,""]},"aj.plugins.lmn_auth.views":{Handler:[1,1,1,""]},"aj.plugins.lmn_auth.views.Handler":{handle_api_change_password:[1,2,1,""]},"aj.plugins.lmn_common":{api:[2,0,0,"-"],lmnfile:[2,0,0,"-"],views:[2,0,0,"-"]},"aj.plugins.lmn_common.api":{CSVSpaceStripper:[2,1,1,""],LinuxmusterConfig:[2,1,1,""],SophomorixProcess:[2,1,1,""],check_allowed_path:[2,3,1,""],lmn_backup_file:[2,3,1,""],lmn_getSophomorixValue:[2,3,1,""],lmn_write_configfile:[2,3,1,""],lmn_write_csv:[2,3,1,""]},"aj.plugins.lmn_common.api.CSVSpaceStripper":{next:[2,2,1,""]},"aj.plugins.lmn_common.api.SophomorixProcess":{run:[2,2,1,""]},"aj.plugins.lmn_common.lmnfile":{CSVLoader:[2,1,1,""],LMNFile:[2,1,1,""],LinboLoader:[2,1,1,""]},"aj.plugins.lmn_common.lmnfile.LMNFile":{backup:[2,2,1,""],check_allowed_path:[2,2,1,""],detect_encoding:[2,2,1,""],hasExtension:[2,2,1,""]},"aj.plugins.lmn_common.views":{Handler:[2,1,1,""]},"aj.plugins.lmn_common.views.Handler":{handle_api_chown:[2,2,1,""],handle_api_create_dir:[2,2,1,""],handle_api_log:[2,2,1,""],handle_api_read_setup_ini:[2,2,1,""],handle_api_remove_dir:[2,2,1,""],handle_api_remove_file:[2,2,1,""],handle_api_version:[2,2,1,""]},"aj.plugins.lmn_devices":{views:[3,0,0,"-"]},"aj.plugins.lmn_devices.views":{Handler:[3,1,1,""]},"aj.plugins.lmn_devices.views.Handler":{handle_api_devices:[3,2,1,""],handle_api_devices_import:[3,2,1,""]},"aj.plugins.lmn_groupmembership":{views:[4,0,0,"-"]},"aj.plugins.lmn_groupmembership.views":{Handler:[4,1,1,""]},"aj.plugins.lmn_groupmembership.views.Handler":{handle_api_groupmembership_details:[4,2,1,""],handle_api_groups:[4,2,1,""],handle_api_search_project:[4,2,1,""],handle_api_set_group:[4,2,1,""],handle_api_set_members:[4,2,1,""]},"aj.plugins.lmn_landingpage":{views:[5,0,0,"-"]},"aj.plugins.lmn_landingpage.views":{Handler:[5,1,1,""]},"aj.plugins.lmn_landingpage.views.Handler":{handle_api_quota:[5,2,1,""]},"aj.plugins.lmn_linbo":{views:[6,0,0,"-"]},"aj.plugins.lmn_linbo.views":{Handler:[6,1,1,""]},"aj.plugins.lmn_linbo.views.Handler":{handle_api_config:[6,2,1,""],handle_api_configs:[6,2,1,""],handle_api_examples:[6,2,1,""],handle_api_examples_postsyncs:[6,2,1,""],handle_api_examples_regs:[6,2,1,""],handle_api_icons:[6,2,1,""],handle_api_icons_read:[6,2,1,""],handle_api_image:[6,2,1,""],handle_api_images:[6,2,1,""],handle_linbo_iso:[6,2,1,""]},"aj.plugins.lmn_quotas":{views:[7,0,0,"-"]},"aj.plugins.lmn_quotas.views":{Handler:[7,1,1,""]},"aj.plugins.lmn_quotas.views.Handler":{handle_api_apply:[7,2,1,""],handle_api_class_quotas:[7,2,1,""],handle_api_ldap_search:[7,2,1,""],handle_api_quotas:[7,2,1,""],handle_api_save_quotas:[7,2,1,""]},"aj.plugins.lmn_session":{views:[8,0,0,"-"]},"aj.plugins.lmn_session.views":{Handler:[8,1,1,""]},"aj.plugins.lmn_session.views.Handler":{handle_api_create_dir:[8,2,1,""],handle_api_get_user_in_room:[8,2,1,""],handle_api_ldap_group_search:[8,2,1,""],handle_api_ldap_user_search:[8,2,1,""],handle_api_session_file_trans:[8,2,1,""],handle_api_session_file_trans_list:[8,2,1,""],handle_api_session_sessions:[8,2,1,""]},"aj.plugins.lmn_settings":{views:[9,0,0,"-"]},"aj.plugins.lmn_settings.views":{Handler:[9,1,1,""],IniParser:[9,1,1,""]},"aj.plugins.lmn_settings.views.Handler":{handle_api_school_share:[9,2,1,""],handle_api_session_sessions:[9,2,1,""],handle_api_settings:[9,2,1,""],handle_api_subnet:[9,2,1,""]},"aj.plugins.lmn_setup_wizard":{views:[10,0,0,"-"]},"aj.plugins.lmn_setup_wizard.views":{Handler:[10,1,1,""]},"aj.plugins.lmn_setup_wizard.views.Handler":{handle_api_is_configured:[10,2,1,""],handle_api_log:[10,2,1,""],handle_api_provision:[10,2,1,""],handle_api_read_log:[10,2,1,""],handle_api_restart:[10,2,1,""]},"aj.plugins.lmn_users":{views:[11,0,0,"-"]},"aj.plugins.lmn_users.views":{Handler:[11,1,1,""]},"aj.plugins.lmn_users.views.Handler":{handle_api_extra_courses:[11,2,1,""],handle_api_extra_students:[11,2,1,""],handle_api_filelistImport:[11,2,1,""],handle_api_sophomorix_globaladmins:[11,2,1,""],handle_api_sophomorix_schooladmins:[11,2,1,""],handle_api_sophomorix_students:[11,2,1,""],handle_api_sophomorix_teachers:[11,2,1,""],handle_api_students:[11,2,1,""],handle_api_teachers:[11,2,1,""],handle_api_users_apply:[11,2,1,""],handle_api_users_check:[11,2,1,""],handle_api_users_globaladmins_create:[11,2,1,""],handle_api_users_password:[11,2,1,""],handle_api_users_print:[11,2,1,""],handle_api_users_print_download:[11,2,1,""],handle_api_users_schooladmins_create:[11,2,1,""],handle_api_users_test_password:[11,2,1,""],handle_group_quota:[11,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"class":[1,2,3,4,5,6,7,8,9,10,11],"default":[1,9],"function":1,"import":[3,11],"new":[1,2,7,9],"return":[1,2,3,4,5,6,7,8,9,10,11],"switch":10,"true":[2,9],"try":2,"var":10,For:[1,2],The:[0,2],With:11,about:6,action:[4,8,11],activ:2,adapt:9,add:[0,4,11],admin:[0,11],after:[10,11],against:1,all:[2,4,5,6,7,10,11],allow:2,allow_no_valu:9,alreadi:10,alwai:2,angular:1,angularj:0,ani:2,anymor:9,api:0,appli:7,applianc:0,arg:2,argument:2,attribut:1,authent:1,author:1,backup:2,bak:2,base:0,basic:[2,11],befor:2,between:8,bool:[1,2,10,11],callabl:2,can:0,chang:[1,11],change_password:1,check:[2,9,10,11],check_allowed_path:2,chown:2,classmethod:2,cloop:2,collect:9,command:[2,11],comment_prefix:9,commun:[1,2],compat:[1,2],complet:0,compliant:1,compress:6,conf:[6,7,9],config:[1,2,3,6,9,10],configur:[7,9,10],connector:2,constructor:2,content:[2,3,6,9],context:[1,2,3,4,5,6,7,8,9,10,11],continu:2,contribut:0,convert:9,copi:8,cours:11,creat:[2,4,11],credenti:1,csv:[2,9,11],csvloader:2,csvspacestripp:2,current:1,danger:11,data:2,default_sect:9,defin:[1,2],definit:2,delet:[6,11],delimit:[2,9],deliv:11,deploy:0,deprec:[2,9],descript:0,detail:[6,7,8,11],detect:2,detect_encod:2,determin:[2,9],dev:0,dict:[1,2,4,5,6,7,8,9,10,11],dict_typ:9,differ:2,direct:6,directori:[2,8,9],directorypluginprovid:[],displai:[5,11],divers:4,docment:0,doe:2,download:[6,11],dpkg:2,each:1,eas:0,empti:6,empty_lines_in_valu:9,enabl:1,encod:[2,9],environ:[0,4],error:2,exampl:6,except:[],execut:1,exist:10,ext:2,extens:2,extra:11,fals:[1,2,9],fast:0,fieldnam:2,fieldsnam:2,file:[1,2,3,6,8,9,10,11],filter:[7,8],find:[0,11],finish:10,first:[0,11],flow:2,found:[],from:[1,2,5,7,10,11],frontend:[2,7],get:[1,2,3,4,5,6,7,8,9,10,11],get_isolation_gid:1,get_isolation_uid:1,get_profil:1,gid:1,given:2,global:11,globaladmin:11,globaladminss:11,goe:1,group:[2,4,6,7,9,11],gzip:6,handl:[2,4,6,8,10],handle_api_appli:7,handle_api_change_password:1,handle_api_chown:2,handle_api_class_quota:7,handle_api_config:6,handle_api_create_dir:[2,8],handle_api_devic:3,handle_api_devices_import:3,handle_api_exampl:6,handle_api_examples_postsync:6,handle_api_examples_reg:6,handle_api_extra_cours:11,handle_api_extra_stud:11,handle_api_filelistimport:11,handle_api_get_user_in_room:8,handle_api_group:4,handle_api_groupmembership_detail:4,handle_api_icon:6,handle_api_icons_read:6,handle_api_imag:6,handle_api_is_configur:10,handle_api_ldap_group_search:8,handle_api_ldap_search:7,handle_api_ldap_user_search:8,handle_api_log:[2,10],handle_api_provis:10,handle_api_quota:[5,7],handle_api_read_log:10,handle_api_read_setup_ini:2,handle_api_remove_dir:2,handle_api_remove_fil:2,handle_api_restart:10,handle_api_save_quota:7,handle_api_school_shar:9,handle_api_search_project:4,handle_api_session_file_tran:8,handle_api_session_file_trans_list:8,handle_api_session_sess:[8,9],handle_api_set:9,handle_api_set_group:4,handle_api_set_memb:4,handle_api_sophomorix_globaladmin:11,handle_api_sophomorix_schooladmin:11,handle_api_sophomorix_stud:11,handle_api_sophomorix_teach:11,handle_api_stud:11,handle_api_subnet:9,handle_api_teach:11,handle_api_users_appli:11,handle_api_users_check:11,handle_api_users_globaladmins_cr:11,handle_api_users_password:11,handle_api_users_print:11,handle_api_users_print_download:11,handle_api_users_schooladmins_cr:11,handle_api_users_test_password:11,handle_api_vers:2,handle_group_quota:11,handle_linbo_iso:6,handler:[1,2,3,4,5,6,7,8,9,10,11],harden:1,hasextens:2,header:11,helper:6,here:2,hide:4,home:8,http:10,http_context:[1,2,3,4,5,6,7,8,9,10,11],httpcontext:[1,2,3,4,5,6,7,8,9,10,11],icon:6,ident:1,ignor:2,ignoreerror:2,imag:6,index:[],info:6,inform:[1,2,4,5,6,7],ini:[2,10],inipars:9,inline_comment_prefix:9,instal:[0,2,10],integ:[1,2],integr:0,interpol:9,invok:2,iso:6,isol:1,its:2,javascript:8,join:4,json:2,jsonpath:2,keep:[1,2],kei:[2,11],keyword:2,kill:[4,11],kvm:0,kwarg:2,launch:[3,10,11],ldap:[1,4,7,11],learn:0,lib:10,like:4,limit:11,linbo:2,linboload:2,link:6,linuxmust:[1,2,4,10,11],linuxmusterconfig:2,list:[0,2,4,6,7,8,11],lmauthenticationprovid:1,lmn_auth:[],lmn_backup_fil:2,lmn_common:[],lmn_getsophomorixvalu:2,lmn_groupmembership:[],lmn_landingpag:[],lmn_write_configfil:2,lmn_write_csv:2,load:[1,3],load_all_from:[],locat:[],log:2,login:5,look:[],macct:6,magic:2,mai:2,manag:[0,1,4,6,7,8,9,11],manipul:2,member:4,meta:2,method:[1,2,3,4,6,7,8,9,10,11],mode:[1,2,3,9,11],modifi:2,modul:[1,5,6,8,9],more:11,move:8,name:[2,4,6,11],necessari:11,need:0,net:[0,1,11],network:0,new_password:1,next:2,none:[2,6,9],number:2,object:[1,2,9,11],offici:0,offset:2,old:1,one:[6,7,11],onli:[0,2],oper:4,option:[2,4],order:0,ordereddict:9,origin:2,otherwis:1,out:11,output:[2,11],overrid:2,owner:[1,2,4,9],packag:2,page:0,panel:0,paramet:[1,2,3,4,5,6,7,8,9,10,11],pars:[1,2,11],parser:2,part:[0,2],partial:4,particip:8,particularli:0,pass:2,passwd:[1,11],password:[1,11],patch:6,path:[1,2],pdf:11,per:[4,6,7,11],perform:[4,11],permiss:1,permit:0,plugin:0,plugincrash:[],pluginloaderror:[],pluginmanag:[],pluginprovid:[],post:[1,2,3,4,6,8,9,10,11],postsync:6,prepar:[0,1,11],print:11,printer:4,process:[0,1,2,10],profil:1,project:[0,2,4,7],provid:[0,1,6],proxmox:0,py2:2,python:0,pythonpath:[],pythonpathpluginprovid:[],queri:[2,5,7,8],quiet:2,quota:[5,11],read:[1,2,3,9,10,11],reason:2,refer:0,reg:6,regist:7,registri:6,remov:[2,4,6],repres:2,requir:11,respect:2,respons:6,restart:10,result:[2,4],right:[1,9],room:8,root:1,rtype:[],run:[2,3],samba:11,same:8,save:[1,2,11],scheme:[1,2],school:[0,7,8,9,11],schooladmin:11,schooladminss:11,search:[2,4],secur:2,self:1,sequenti:2,server:0,servic:10,session:1,set:[10,11],setup:2,share:[8,9,11],should:2,simul:2,some:[0,6],sophomorix:[1,2,5,7,8,9,11],sophomorixcommand:2,sophomorixprocess:2,sourc:[1,2,3,4,5,6,7,8,9,10,11],specif:0,specifi:[4,6,11],standard:2,start:6,state:[8,11],statu:11,still:11,str:[],strict:9,string:[1,2,3,5,6,8,9,11],student:[8,11],style:11,subclass:2,subnet:9,success:[2,11],system:3,taken:2,target:2,teacher:[8,11],test:[0,1,10],thi:[0,1,2],thread:2,through:[1,2,5,7,8,11],timestamp:2,tmp:10,tool:[2,4],transfer:8,tree:[1,4,7,11],tupl:4,type:[1,2,3,4,5,6,7,8,9,10,11],uid:[1,11],unload:[],updat:[6,11],upload:8,use:0,used:[1,2,9],useful:5,user:[1,2,4,5,7,8],userldapconfig:1,usernam:[1,7],using:[2,9],utf:[2,9],valu:[2,7],version:2,view:11,want:0,warn:11,webui:[2,10],welcom:[0,5],which:[0,6],whole:[0,2,6],wizard:2,worker:[1,2],write:[1,2,3,6,9,10,11],written:0,xcp:0,yaml:[1,2],you:[0,2]},titles:["Linuxmuster-webui7\u2019s developer documentation","API: aj.plugins.lmn_auth","API: aj.plugins.lmn_common","API: aj.plugins.lmn_devices","API: aj.plugins.lmn_groupmembership","API: aj.plugins.lmn_landingpage","API: aj.plugins.lmn_linbo","API: aj.plugins.lmn_quotas","API: aj.plugins.lmn_session","API: aj.plugins.lmn_settings","API: aj.plugins.lmn_setup_wizard","API: aj.plugins.lmn_users"],titleterms:{about:0,ajenti:0,api:[1,2,3,4,5,6,7,8,9,10,11],auth:1,common:2,develop:0,devic:3,document:0,groupmembership:4,indic:[],land:5,linbo:6,linuxmust:0,lmn:[1,2,3,4,5,6,7,8,9,10,11],lmn_auth:1,lmn_common:2,lmn_devic:3,lmn_groupmembership:4,lmn_landingpag:5,lmn_linbo:6,lmn_quota:7,lmn_session:8,lmn_set:9,lmn_setup_wizard:10,lmn_user:11,lmnfile:2,main:[],page:5,plugin:[1,2,3,4,5,6,7,8,9,10,11],quota:7,session:8,set:9,setup:10,tabl:[],test:[],user:11,view:[1,2,3,4,5,6,7,8,9,10],webui7:0,welcom:[],wizard:10}})