# TODO - SQL (MySQL) backend migration

## Plan confirmed
- Implement full SQL setup for current MERN backend (MySQL + Sequelize)

## Steps
1. Inspect remaining Mongoose models (Order model) and confirm fields.
2. Add Sequelize + mysql2 dependencies to `backend/package.json`.
3. Replace `backend/config/db.js` + server startup with Sequelize connection.
4. Create Sequelize models for Product, User, Order.
5. Add JSON/text fields mapping (e.g., product images).
6. Create full MySQL SQL DDL file at `backend/sql/schema.mysql.sql`.
7. Implement create/update controllers using Sequelize.
8. Update `authMiddleware` for Sequelize user lookup.
9. Update `seedAdmin.js` to insert admin in SQL.
10. Remove/stop using Mongo env `MONGO_URI`.
11. Add/Update `backend/.env` template with MySQL env vars.
12. Test API endpoints end-to-end.

