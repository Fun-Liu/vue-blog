# 链接mysql错误时，需要改密码
http://tieba.baidu.com/p/5658058140#119504816835l
Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '831015';
FLUSH PRIVILEGES;