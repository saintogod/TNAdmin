echo "start database" ...
start "mongodb" mongod --dbpath D:\Workspace\TNAdmin\data

echo "start dbconsole"
start "mongodb-console" mongo

echo "start nodejs"
start "nodejs" node bin\www
