import mysql.connector

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



    print("1. Create New User")
    print("2. Search User")
    print("3. Show Users")
    print("4. Delete User")

    choice = int(input("Enter choice :"))

    if choice==1:
        cursor = conn.cursor()
        id = int(input("Enter userid :"))
        firstname = input("Enter first name :")
        lastname = input("Enter last name :")
        gender = input("Enter gender :")
        city = input("Enter city :")
        role = input("Enter role :")
        employee_id = input("Enter employee id :")
        password = input("Enter password :")
        vcode = input("Enter verification code :")

        query = f"INSERT INTO Users(id, firstname, lastname, gender, city, role, employeeid, password, verificationcode) VALUES({id}, '{firstname}', '{lastname}', '{gender}', '{city}', '{role}', '{employee_id}', '{password}', '{vcode}')"
        print(query)

        cursor.execute(query)
        conn.commit()
        print("insert successfull")

        conn.close()

    elif choice==2:
          cursor = conn.cursor()
          id = int(input("Enter user ID: "))
          query = f"SELECT * FROM Users WHERE id = {id}"
          cursor.execute(query)
          result = cursor.fetchone()
          if result:
            print("Search successful: ", result)
          else:
            print("User not found")
          cursor.close()
          conn.close()

    elif choice==3:
        cursor = conn.cursor()
        query = "SELECT * FROM USERS"
        print(query)
        cursor.execute(query)
        result = cursor.fetchall()
        if result:
            print("Users found:")
            for row in result:
                print(row)
        else:
            print("No users found")
        cursor.close()
        conn.close()

    elif choice==4:
        cursor = conn.cursor()
        id = int(input("Enter userid :"))

        query = f"delete from Users where id ={id}"
        print(query)

        cursor.execute(query)
        conn.commit()

        print("delete successfull")

        conn.close()
    else:
        print("Invalid option selected")



except Exception as e:
    print(e)