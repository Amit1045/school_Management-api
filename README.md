# 📚 School Management API  

A RESTful API built with **Node.js, Express, and MySQL** for managing schools, it addSchool and fetch the list of schools nearer to you . Deployed on **Railway** for easy access and testing.  

---

## 🚀 Live API  
Base URL:  https://schoolmanagement-api-production-7b4f.up.railway.app

---

## 📂 Features
- **School Management** → list schools with location filtering  
- **Add Schools** → add School (name, Address, latitude , longitude )   

---

## ⚙️ Tech Stack
- **Backend**: Node.js, Express  
- **Database**: MySQL (hosted on Railway)  
- **Hosting**: Railway  
- **Testing**: Postman  

---

## 🛠️ Setup Instructions  

### 1. Clone the repository  
```bash
git clone https://github.com/Amit1045/school_Management-api.git
cd school_Management-api
```
### 2. Install dependencies
```npm install```

### 3. Configure Environment Variables

Create a .env file in the root directory. Example:
```
DATABASE_URL="mysql://user:password@host:port/School_Management"
PORT=3000
```
### 4. Run locally
```npm start```

### 5.Server will run at:
```
http://localhost:3000
```

📌 API Endpoints
### 1. List Schools
```
GET {{base_url}}/listSchools?longitude=-97.822&latitude=37.751
```
### 2. Add Employee
```
POST {{base_url}}/addSchool
```

### 👨‍💻 Author

Amit Yadav

