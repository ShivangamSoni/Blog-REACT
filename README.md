# The Siren

This is a Blogging Website, Created Using REACT & Modular CSS.

## Project Structure

I've divided the entire project into Pages, Containers & Components.

## Pages

- Home
- Category
- Post
- Profile
- Register
- Sign In
- Write
- Not Found

### Containers

- Featured Posts
- Latest Articles
- Latest Posts
- Latest Stories
- Side Bar
- Top Posts

### Components

- Header
- Navbar
- Blog Cards:
  - Blog Card
  - Feature Card
  - Hero Card
  - Image Top Card
  - No Image Card
  - Side Bar Card
- Blog Post
- User Bar
- User Profile
- UpVote Share
- Notification
- Advertisement

### Routes

These are Components that determine Routes depending upon the current state of User i.e.

If the User is Authenticated they shouldn't be able to access Login or Register Pages since they are already Authenticated.

User who are not Authenticated should be redirected to Login Page if they try to access any Restricted Areas of the Website Like Blog Writer.

- Auth Route
- Un Auth Route

### Utilities

These are some Custom Hooks & functions to perform certain Functions regularly

- abbreviateNumber: To abbreviate Large Number like 1000 becomes 1K.
- ScrollToTop: Scrolls the View to Top when a new Page id Loaded.
- useMediaQuery: Check for specified Media Query. Used for Responsive Component Rendering.
