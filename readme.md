#IVAC


npm install sqlite3

npm install prisma

npx prisma init --datasource-provider sqlite

npm install @prisma/client




npx prisma migrate dev

npx prisma generate

npx prisma db seed


npx prisma studio


npx prisma migrate dev --name add_new_column_to_user_table

npx prisma generate