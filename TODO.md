# TODO - Sundram Agri Fixes

## Admin login + Render MySQL ECONNREFUSED fix
- [x] 1) Update `backend/config/sequelize.js` to remove unsafe fallback `DB_HOST=127.0.0.1`.
- [x] 2) Add clearer error if required env vars are missing.
- [ ] 3) Ensure Render backend Environment Variables include: `DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS, JWT_SECRET`.
- [ ] 4) Run `backend/seedAdmin.js` after MySQL is reachable to create admin.
- [ ] 5) Redeploy backend and verify `/api/auth/login` works and admin pages can open.


