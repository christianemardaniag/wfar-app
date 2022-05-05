# Web-Based Weekly Faculty Accomplishments Report (WFAR) Management System

Create a system that will allow a faculty to submit their Weekly Faculty Accomplishment Report (WFAR). Per semester, there are 18 weeks (sometimes 15 weks) of classes. Each week, a faculty member must submit their WFAR. In a WFAR, faculty must indicate all his/her subjects per week. Each subject must include the following information:

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

WFAR entry of each faculty is always grouped per week, this means that if a faculty made a submission 5 times (per subject/section) regardless of date and time of submission , then indicated the same Week number, the system will group all the entries into 1 WFAR (the week indicated).

Faculty are required to submit their WFAR through the system. Faculty can view, edit, archive all their submissions. When a faculty submitted theire WFAR, the are chair/department head will receive a notification. The WFAR submission will then have a status of "For checking".

The Area Chairs/Department Heads are a faculty member that is tasked to check the WFAR of each faculty assigned to them. The admin is the one who assigned a group of faculty members that the are chairs/department heads should monitor. Area chairs/Department heads can only see the WFAR submission of the faculty assigned to them. When checking the WFAR, thet can indicate if the WFAR submission of the faculty assigned to them is correct and complete by changing status as "OK."
(Faculty will receive a notification). They can also leave feedback/comments in a WFAR submission if there is a correction,and they can change its status to "With Revisions" (Faculty will receive a notification). They can also generate a report of faculty members under them who have their WFAR submission completed (With "OK" status). They can also search and filter the WFAR submission to them.

Admin can access all the features and see all the WFAR submissions. Aside from that, the admin can assign faculty to be checked by Area Chair or Department Head. Admin can promote/demote a faculty member to an Area Chair or Department Head. Admin can create a new Semester (new semester means new batch of WFAR).



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
