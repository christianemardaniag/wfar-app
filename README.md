# Web-Based Weekly Faculty Accomplishments Report (WFAR) Management System

Create a system that will allow a faculty to submit their Weekly Faculty Accomplishment Report (WFAR).

The Area Chair or Department Head can then view, give a comment, create a report, filter, search, and print the submitted WFAR by the faculty assigned to them.

Admin can access all the features and see all the WFAR submissions. Aside from that, the admin can assign faculty to be checked by Area Chair or Department Head. Admin can promote/demote a faculty member to an Area Chair or Department Head. Admin can create a new Semester (new semester means new batch of WFAR).

**Information needed for a WFAR:**

- Date of Class/Accomplishment
- Subject Being Taught
- Course, Years and Section
- No. of Attendees
- Link of MS Teams Recordings
- Learning Activities
- Attachments
    - Team Meet Screenshot/s
    - Provided Activity Screenshot/s

Sample WFAR:
[Week 1 - Galang, Gabriel M Sample.docx](https://bulsumain-my.sharepoint.com/:w:/g/personal/gabriel_galang_bulsumain_onmicrosoft_com/EbJl_LeZVQpDoWbznpziUwQBsXjdVlHMdFJ-mTcxmKRL1Q?rtime=56_1Q5oX2kg)

Information needed for WFAR report:
- Faculty Name
- Remarks

Sample WFAR report:
[WFAR Report Sample.xlsx](https://bulsumain-my.sharepoint.com/:x:/g/personal/gabriel_galang_bulsumain_onmicrosoft_com/EWM_dORvgYJJmlGWA7SMtx0BhX2mPeA1yftQ9G_bDsSptg?e=iWijtu)

User Levels:
**Admin**
- Promotes/Demotes Faculty Account to Area Chair/Department Head.
- View the submission of the Faculty/Area Chair/Department Head.
- Can generate report.
- Can assign faculty on specific Area Chair/Department Head.
- Can create a new semester.
**Area Chair/Department Head**
- View the submission of the Faculty/Area Chair/Department Head.
- Can generate reports of the WFAR of the faculty under them.
- Uploads WFAR.
**Faculty**
- Uploads WFAR.
- Can only see their submissions.

Report Needed:
- Summary of faculty who completed the requirements (Can be filtered by weeks, status).
- WFAR submitted by a faculty member.

Uploads:
- Must be able to upload multiple images that will serve as attachments per meeting.

Registration:
- Faculty should register on registration page. Must be accepted by Area Chair/Department Head/Admin.
- Area Chair/Department are normal Faculty Accounts who were promoted by the admin account.

Dashboard
- Percentage report
- Activities


**Layout.** Layout must be consistent throughout the whole program/system, easy to navigate, with proper alert and prompt messages.

**Account Registration.** Users shall register accounts before using the program/system. Allow the user to provide both username and email address (both shall be validated for duplication of entry). Different system access of user levels must be properly differentiated to one another.

**Log In and Log Out.** Allow the user to choose from username or email when logging in. Provide a confirmation before logging out. Provide security features for the login interface (ex. 3 times login attempt). Admin login must be separated to user login.

**User Profile.** Users must be able to edit or delete their account. Users must be able to upload a profile picture. Change password shall ask for the old password, new password, and confirm new password.

**Administrator.** Admin must be able to manage (CRUD) the content of the program/system. Please consider the purpose of the program on what exactly needed to be managed.
(ex. If the system is a Management Information System for a clinic… The system must be able to manage records of the patients, doctors, nurses, staffs, medicine, medical records, medical transactions, accounts, etc.)

**Content Management.** Admin must be able to (CRUD) manage the content of the system/program like logo, moto, VMGO, announcements, or anything applicable.

**Report Generation.** Admin must be able to generate reports. Please consider the data/information of the accounts to be reported.
(ex. If the system is a Management Information System for a clinic… The system must be able to provide comprehensive reports of patients, users, medicine, medical records, medical transactions, etc.)
The admin must be able to filter the reports with the specific details such as date, name, categories, and anything applicable.
The report must be printable or downloadable with proper heading, footer, logo, date and time, and the user who generated the report.
