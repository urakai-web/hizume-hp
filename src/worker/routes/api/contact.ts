import { Hono } from "hono";
import type { Bindings } from "../../env";

const contact = new Hono<{ Bindings: Bindings }>();

contact.post("/", async (c) => {
  const form = await c.req.formData();
  const name = form.get("name");
  const email = form.get("email");
  const category = form.get("category");
  const message = form.get("message");

  if (!name || !email || !category || !message) {
    return c.json({ ok: false, error: "required fields missing" }, 400);
  }

  // TODO: メール送信サービス(送信先は実装着手時に確認)と連携する。現時点ではログ出力のみ。
  console.log("[contact]", { name, email, category, tel: form.get("tel"), message });

  return c.json({ ok: true });
});

export default contact;
