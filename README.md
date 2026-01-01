# 🚀 Web Lapor Fasilitas – API README

REST API untuk sistem pelaporan kerusakan fasilitas berbasis web dengan autentikasi JWT dan role-based access.

---

## 🌐 Base URL
> https://laporfasilitasbackend-production.up.railway.app/api  
> saya hosting di railway masa berlaku 30 hari sejak tanggal 28-12-2025  
> kalian bisa menghosting sendiri  

---

## 📦 Format & Header
Format data: JSON  

Header wajib  
Content-Type: application/json  
Authorization: Bearer <token>  

## 🔐 Authentication
Login → dapatkan JWT Token  
Simpan token di client  
Sertakan token di setiap request ke endpoint terproteksi  

##  👥 Role
Admin → kelola semua laporan  
User → buat & lihat laporan sendiri  

## 🔑 Auth Endpoint
- Register  
**POST /auth/registrasi**  
Request register:  
{  
    "name": "dimas",  
    "email": "dimas@gmail.com",  
    "password": "admin123",  
    "role": "admin"  
}  
Response register:  
{  
    "message": "User registered"  
}  
status code: 201 created  

- Login  
**POST /auth/login**  
Request login:  
{  
    "email": "dimas@gmail.com",  
    "password": "admin123"  
}  
Response login:  
{  
    "token":_ "token jwt"_  
}  
status code: 200 OK  

## 📝 Laporan – User
Method	Endpoint Fungsi  
**- POST	/reports	Buat laporan**  
Request reports:    
{  
    "title": "Halte Bocor",  
   "category": "Fasilitas Umum",  
   "location": "Ds.kenari Kec.Marajali",  
   "description": "Atap bangunan halte bocor, tidak bisa digunakan untuk berteduh"  
}  
Response reports:  
{  
    "title": "Halte Bocor",  
    "category": "Fasilitas Umum",  
    "location": "Ds.kenari Kec.Marajali",  
    "description": "Atap bangunan halte bocor, tidak bisa digunakan untuk berteduh",  
    "status": "baru",  
    "user": "69512fb82a7b9a2b25d13ff3",  
    "_id": "69567b40f1e195171a4e2f2d",  
    "createdAt": "2026-01-01T13:48:48.569Z",  
    "__v": 0  
}  
status code: 201 created  

**- GET	/reports/my	Lihat laporan sendiri**  

**- GET	/reports/my/{id}	Detail laporan sendiri**  

## 🛠️ Laporan – Admin
Method	Endpoint	Fungsi  
GET	/reports	Lihat semua laporan  
GET	/reports/report/{id}	Detail laporan  
PUT	/reports/status/{id}	Update status laporan  
Request update status:  
{  
    "status": "diproses"  
}  
Response update status:  
{  
    "_id": "69567b40f1e195171a4e2f2d",  
    "title": "Halte Bocor",  
    "category": "Fasilitas Umum",  
    "location": "Ds.kenari Kec.Marajali",  
    "description": "Atap bangunan halte bocor, tidak bisa digunakan untuk berteduh",  
    "status": "diproses",  
    "user": "69512fb82a7b9a2b25d13ff3",  
    "createdAt": "2026-01-01T13:48:48.569Z",  
    "__v": 0  
}  
status code: 200 OK  
DELETE	/reports/{id}	Hapus laporan  

## 👤 Endpoint Umum
Method	Endpoint	Fungsi  
GET	/reports/profile	Data user/admin login  
GET	/reports/categories	Daftar kategori laporan  
