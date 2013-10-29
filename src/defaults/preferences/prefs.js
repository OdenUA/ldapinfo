pref("extensions.ldapinfoshow.load_from_local_dir", false);
pref("extensions.ldapinfoshow.local_pic_dir", "");
pref("extensions.ldapinfoshow.load_from_addressbook", true);
pref("extensions.ldapinfoshow.load_from_ldap", true);
pref("extensions.ldapinfoshow.ldap_ignore_domain", false);
pref("extensions.ldapinfoshow.load_from_facebook", false);
pref("extensions.ldapinfoshow.facebook_token", "");
pref("extensions.ldapinfoshow.facebook_token_expire", "0");
pref("extensions.ldapinfoshow.load_from_google", true);
pref("extensions.ldapinfoshow.load_from_gravatar", true);
pref("extensions.ldapinfoshow.load_from_remote_always", false);
pref("extensions.ldapinfoshow.load_from_all_remote", true);
pref("extensions.ldapinfoshow.ldap_attributes", 'cn,jpegPhoto,thumbnailPhoto,photo,telephoneNumber,pager,mobile,facsimileTelephoneNumber,mobileTelephoneNumber,pagerTelephoneNumber,physicalDeliveryOfficeName,ou,mail,title,Reports,manager,employeeNumber,employeeType,url');
pref("extensions.ldapinfoshow.filterTemplate", "(|(mail=%(email)s)(mailLocalAddress=%(email)s))");
pref("extensions.ldapinfoshow.load_from_photo_url", true);
pref("extensions.ldapinfoshow.photoURL", "http://lookup/lookup/publicphotos/%(employeeNumber)08s.jpg");
pref("extensions.ldapinfoshow.click2dial", "http://lookup/lookup/click2dial/lookup-click2dial.cgi?dialstring=%s");
pref("extensions.ldapinfoshow.ldapTimeoutWhenCached", 20);
pref("extensions.ldapinfoshow.ldapTimeoutInitial", 60);
pref("extensions.ldapinfoshow.ldapIdleTimeout", 300);
pref("extensions.ldapinfoshow.enable_verbose_info", false);