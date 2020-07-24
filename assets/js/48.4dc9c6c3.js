(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{362:function(e,a,n){"use strict";n.r(a);var t=n(32),_=Object(t.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"kc-agent-moni"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kc-agent-moni","aria-hidden":"true"}},[e._v("#")]),e._v(" KC agent moni")]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#nagiosプラグイン"}},[e._v("Nagiosプラグイン")])]),n("li",[n("a",{attrs:{href:"#zabbixテンプレート"}},[e._v("Zabbixテンプレート")])])])]),n("p"),e._v(" "),n("h2",{attrs:{id:"nagiosプラグイン"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nagiosプラグイン","aria-hidden":"true"}},[e._v("#")]),e._v(" Nagiosプラグイン")]),e._v(" "),n("p",[n("code",[e._v("check_kcare")]),e._v(" は古くなったサーバや非アクティブなサーバを監視する方法を提供するNagiosプラグインです。KernelCare Keyに割り当てられているサーバまたはパートナーアカウントのすべてのサーバに関する情報を提供できます。")]),e._v(" "),n("p",[e._v("Nagiosモニタリングシステムのインストールから始めます。")]),e._v(" "),n("p",[e._v("このプラグインは "),n("a",{attrs:{href:"https://patches.kernelcare.com/downloads/nagios/check_kcare",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://patches.kernelcare.com/downloads/nagios/check_kcare"),n("OutboundLink")],1),e._v(" からダウンロードすることができます。")]),e._v(" "),n("p",[e._v("そのプラグインを "),n("code",[e._v("/usr/lib64/nagios/plugins/")]),e._v(" ディレクトリに配置し、以下のコマンドを実行してこのスクリプトを実行可能な状態にします。:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("chmod +x /usr/lib64/nagios/plugins/check_kcare\n")])])]),n("p",[e._v("以下のテンプレートから "),n("code",[e._v("kcare.cfg")]),e._v(" 設定ファイルを作成し、 "),n("code",[e._v("/etc/nagios/conf.d/")]),e._v(" ディレクトリに配置します。")]),e._v(" "),n("p",[n("code",[e._v("KERNELCARE_KEY")]),e._v(" の代わりにKernelCare Keyも指定する必要があります。 ライセンスがIPベースの場合、CLNアカウントの_Profile_セクションに、ログインとAPIセキュリティトークンを見つけることができます。")]),e._v(" "),n("p",[e._v("Nagiosサービスを再起動（リスタート）し、Nagios Web UI (https://NAGIOS_IP/nagios/) にアクセスします。_Services_リンク(_Hosts_の左上)をクリックします。モニタリングスクリプトからの出力を示す文字列を見つけることができるはずです（下記のスクリーンショットをご覧ください）。")]),e._v(" "),n("p",[e._v("スクリプトオプション:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th"),e._v(" "),n("th")])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("-k KERNELCARE_KEY")])]),e._v(" "),n("td",[e._v("KEYに関連したサーバの状況を取得")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("-l PARTNER_LOGIN --api-token TOKEN")])]),e._v(" "),n("td",[e._v("ログイン/トークンをベースとしたパートナーアカウントのすべてのサーバ状況を取得")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("-c o,u,i -- return CRITICAL")])]),e._v(" "),n("td",[e._v("カンマで区切られた o, u & i のリスト"),n("br"),n("code",[e._v("o")]),e._v(" - 非最新"),n("br"),n("code",[e._v("u")]),e._v(" - 未知のカーネル"),n("br"),n("code",[e._v("i")]),e._v(" - 非アクティブサーバ")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("-w o,u,i -- return WARNING")])]),e._v(" "),n("td",[e._v("カンマで区切られた o, u & i のリスト"),n("br"),n("code",[e._v("o")]),e._v(" - 非最新"),n("br"),n("code",[e._v("u")]),e._v(" - 未知のカーネル"),n("br"),n("code",[e._v("i")]),e._v(" - 非アクティブサーバ")])])])]),e._v(" "),n("p",[e._v("KeyベースのKernelCareライセンスの設定の例は以下の通りです（IPベースのセクションはここではコメントアウトされています）。:")]),e._v(" "),n("p",[e._v("KernelCareステータスチェックサービスを関連付けるホストの例です")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("define host {\n      host_name                       kcare-service\n      notifications_enabled           0\n      max_check_attempts             1\n      notification_interval           0\n      check_period                   24x7\n}\n \n \ndefine command {\n      command_name     check_kcare\n      command_line     /usr/lib64/nagios/plugins/check_kcare -k $ARG1$\n}\n \ndefine command {\n      command_name     check_kcare_opts\n      command_line     /usr/lib64/nagios/plugins/check_kcare -k $ARG1$ -c $ARG2$ -w $ARG3$\n}\ndefine command {\n      command_name     check_kcare_partner\n      command_line     /usr/lib64/nagios/plugins/check_kcare -l $ARG1$ --api-token $ARG2$\n}\n \ndefine command {\n      command_name     check_kcare_partner_opts\n      command_line     /usr/lib64/nagios/plugins/check_kcare -k $ARG1$ -l $ARG1$ --api-token $ARG2$ -c $ARG2$ -w $ARG3$\n}\n \ndefine service {\n      host_name                       kcare-service\n      service_description             KernelCare Server Status Checker By Key\n      check_command                   check_kcare!KERNELCARE_KEY\n      notifications_enabled           1\n      check_interval                 240\n      retry_interval                 60\n      max_check_attempts             4\n      notification_options           w,c,r\n      check_period                     24x7\n      notification_period             24x7\n}\n \n#define service {\n#       host_name                       kcare-service\n#       service_description             KernelCare Server Status Checker By login/token with outdated/inactive considered as critical\n#       check_command                   check_kcare_partner_opts!partner_login!partner_token!o,i!u\n#       notifications_enabled           1\n#       check_interval                  240\n#       retry_interval                  60\n#       max_check_attempts              4\n#       notification_options            w,c,r\n#       check_period                     24x7\n#       notification_period             24x7\n#}\n")])])]),n("p",[n("img",{attrs:{src:"/images/nagiosservices_zoom70.png",alt:""}})]),e._v(" "),n("p",[n("img",{attrs:{src:"/images/hmfile_hash_6837b862.png",alt:""}})]),e._v(" "),n("h2",{attrs:{id:"zabbixテンプレート"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zabbixテンプレート","aria-hidden":"true"}},[e._v("#")]),e._v(" Zabbixテンプレート")]),e._v(" "),n("p",[e._v("KernelCare用のZabbixテンプレート")]),e._v(" "),n("p",[n("code",[e._v("check_kcare")]),e._v(" は非最新のサーバや非アクティブなサーバを監視する方法を提供する Nagios/Zabbix プラグインです。 KernelCare Keyに割り当てられているサーバまたはパートナーアカウントのすべてのサーバに関する情報を提供できます。")]),e._v(" "),n("p",[e._v("このプラグインは "),n("a",{attrs:{href:"https://patches.kernelcare.com/downloads/nagios/check_kcare",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://patches.kernelcare.com/downloads/nagios/check_kcare"),n("OutboundLink")],1),e._v(" からダウンロードできます。")]),e._v(" "),n("p",[e._v("/usr/lib/zabbix/externalscripts")]),e._v(" "),n("p",[e._v("（またはZabbix外部チェックスクリプト用に設定された他のディレクトリ）")]),e._v(" "),n("p",[e._v("スクリプトオプション:")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th"),e._v(" "),n("th")])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("code",[e._v("-z")])]),e._v(" "),n("td",[e._v("Zabbixの互換フォーマット（それ以外はNagios）")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("-k KERNELCARE_KEY")])]),e._v(" "),n("td",[e._v("KEYに関連したサーバの状況を取得")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("-l PARTNER_LOGIN --api-token TOKEN")])]),e._v(" "),n("td",[e._v("ログイン/トークンをベースとしたパートナーアカウントのすべてのサーバ状況を取得")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("-c o,u,i -- return CRITICAL")])]),e._v(" "),n("td",[e._v("カンマで区切られた o, u & i のリスト"),n("br"),n("code",[e._v("o")]),e._v(" - 非最新"),n("br"),n("code",[e._v("u")]),e._v(" - 未知のカーネル"),n("br"),n("code",[e._v("i")]),e._v(" - 非アクティブサーバ")])]),e._v(" "),n("tr",[n("td",[n("code",[e._v("-w o,u,i -- return WARNING")])]),e._v(" "),n("td",[e._v("カンマで区切られた o, u & i のリスト"),n("br"),n("code",[e._v("o")]),e._v(" - 非最新"),n("br"),n("code",[e._v("u")]),e._v(" - 未知のカーネル"),n("br"),n("code",[e._v("i")]),e._v(" - 非アクティブサーバ")])])])]),e._v(" "),n("p",[e._v("Zabbixテンプレートは以下からダウンロードできます。:")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://patches.kernelcare.com/downloads/nagios/kcare_zabbix_template.xml",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://patches.kernelcare.com/downloads/nagios/kcare_zabbix_template.xml"),n("OutboundLink")],1)])])},[],!1,null,null,null);a.default=_.exports}}]);