# Email Setup

The contact and quote forms send through Resend.

Required production environment variable:

```env
RESEND_API_KEY=re_xxxxxxxxx
```

Optional overrides:

```env
CONTACT_EMAIL_FROM="Deeroi Website <info@deeroiconstructions.com>"
CONTACT_EMAIL_TO="deeroi.info@gmail.com"
```

Before enabling the form in production:

1. Verify `deeroiconstructions.com` in Resend.
2. Add `RESEND_API_KEY` to the hosting provider environment variables.
3. Keep `CONTACT_EMAIL_TO` as `deeroi.info@gmail.com` if the Gmail inbox should receive leads.
