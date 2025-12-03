# Using Decap CMS with Netlify (with Authentication)

## Netlify setup

1. From the dashboard → “Import existing project from Git” (go through oauth flow)
2. Set up config like the project name (used in the URL before setting up a custom domain) and build step (`npm run prod`). Please ensure you route the `sunnymixers.com` domain to this site.
3. App automatically deployed!

## Login with Github ([docs](https://docs.netlify.com/manage/security/secure-access-to-sites/oauth-provider-tokens/#using-an-authentication-provider))


1. In Github, [create a new Oauth application](https://github.com/settings/applications/new) and save the client ID and secret. 
2. Authorization callback URL: `https://api.netlify.com/auth/done`
3. URL: `https://sunnymixers.com/`
4. This will route you to the page for the new oauth application you just created. Notice the Client ID. You’ll need to click the `Generate a new client secret` button and save it somewhere. 

### Add Client ID and Secret to Netlify app ([docs](https://docs.netlify.com/manage/security/secure-access-to-sites/oauth-provider-tokens/#using-an-authentication-provider))

1. In Netlify, go to the oauth section of the [project config](https://app.netlify.com/projects/sunny-mixers/configuration/access#oauth). 
2. Click `Install Provider` and choose `Github`
3. Enter Client ID and Secret and click `Install`

### Rejoice!!!

Now you can log in with Github and you’ll only be granted access if you have write access to the repo on Github (meaning you're a collaborator on Github).