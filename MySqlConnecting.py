

#connecting MySQL to Python Script
import mysql.connector;

db = {
    "host":"localhost",
    "port":3306,
    "username":"root",
    "password":"manager",
    "schema":"oes"
}

try:
    conn = mysql.connector.connect(
        host = db['host'],
        port = db['port'],
        user=db['username'],
        password=db['password'],
        db=db['schema'])

    cursor = conn.cursor()
    query = "SELECT * FROM Users"
    cursor.execute(query)

    result= cursor.fetchall()
    print(result)
    for item in result:
        print(item[1])



except Exception as e:
    print(e)

