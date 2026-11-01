# INBBL — Same world. Closer.

Official website for **INBBL**, a social app for real 1-on-1 conversations, voice calls, and real moments across India.

---

## 📊 How to Connect "Get Early Access" to Google Sheets (Free in 60s)

Every time someone enters their email on the website, this script instantly adds a new row to your personal Google Sheet.

### Step 1: Create a Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new spreadsheet named **"INBBL Waitlist"**.
2. In Row 1, name your columns:
   * **Column A:** `Timestamp`
   * **Column B:** `Email`
   * **Column C:** `Source`

### Step 2: Add the Google Apps Script
1. In your Google Sheet, click **Extensions** > **Apps Script**.
2. Replace all code in the editor with this script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var email = e.parameter.email || "No email";
    var timestamp = new Date();
    var source = e.parameter.source || "Website";
    
    sheet.appendRow([timestamp, email, source]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click the **Save** icon (disk icon).

### Step 3: Deploy as Web App
1. At the top right, click **Deploy** > **New deployment**.
2. Select type: **Web app** (gear icon).
3. Set configuration:
   * **Description:** `INBBL Waitlist Web App`
   * **Execute as:** `Me` (your Google account)
   * **Who has access:** `Anyone` *(Important: select "Anyone" so the website can submit leads without authentication)*.
4. Click **Deploy**. Authorize permissions if prompted by Google.
5. Copy your **Web app URL** (looks like: `https://script.google.com/macros/s/AKfycb.../exec`).

### Step 4: Paste into your Project
Open `.env` in this project and paste your URL:

```env
VITE_GOOGLE_SHEETS_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

Restart your Vite server (`npm run dev`) or redeploy. Now, every single email submitted will instantly appear as a new row in your Google Sheet!

---

## 🛠️ Local Development

```bash
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

