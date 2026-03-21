# 🔥 Firebase Console Setup Guide
**Project: bathroom-remodeling-ddafa**

## 📋 Required Setup Steps

### Step 1: Add Authorized Domain (2 minutes)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select project: **bathroom-remodeling-ddafa**
3. Navigate to: **Authentication → Settings → Authorized domains**
4. Click **"Add domain"**
5. Enter: `airforshare.online`
6. Click **"Add"**

### Step 2: Deploy Firestore Rules (2 minutes)
1. In Firebase Console, navigate to: **Firestore Database → Rules**
2. Replace the existing rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /quotes/{document=**} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

3. Click **"Publish"**

## ✅ What This Accomplishes

- **Form Submissions**: Both contact forms and quote forms will save to Firestore
- **Data Collection**: All form data will be visible in the Firebase Console
- **Security**: Rules allow only creating new documents (no unauthorized access)
- **Domain Authorization**: Forms will work on your live domain

## 🗂️ Where to Find Form Data

After setup, form submissions will appear in:
**Firestore Database → quotes → [documents]**

Each document contains:
- `name` - Customer name
- `phone` - Phone number  
- `email` - Email address
- `service` - Selected service
- `message` - Customer message
- `type` - "contact" or "quote"
- `createdAt` - Timestamp

## 🧪 Testing After Setup

1. Visit: https://airforshare.online
2. Fill out any contact form or quote form
3. Submit the form
4. Check Firestore Console for new document

## 🔧 Troubleshooting

If forms don't work:
1. Verify domain is added to Authentication settings
2. Check Firestore rules are published
3. Ensure Firebase configuration is correct in `lib/firebase.ts`
4. Check browser console for error messages

## 📞 Support

For additional help:
- Check Firebase documentation
- Review form submission errors in browser console
- Verify network connectivity to Firebase services
