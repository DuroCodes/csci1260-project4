# csci 1260 project 4

a better remake of [spongebin](https://github.com/durocodes/spongebin), i'll end up using this for the new update of it 🔥 (it'll be on the [spongebin](https://github.com/durocodes/spongebin) repo eventually)

## prerequisites

a [neon](https://neon.tech) database connection uri to connect to the database

## setup

1. clone the repo
2. install the dependencies

```bash
bun install
```

3. create a `.env` file in the root directory and add the following variables

```env
DATABASE_URL=your_database_uri
```

4. run the migrations

```bash
bunx drizzle-kit generate
bunx drizzle-kit migrate
```

5. run the app

```bash
bun dev
```

6. profit
