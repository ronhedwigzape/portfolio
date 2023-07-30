# <img src="assets/favicon.svg" style="height: 30px; margin-right: 10px;"> ronhedwigzape 

## My Official Harry-Potter Themed Portfolio

Welcome to my Official Harry Potter Themed Portfolio! This portfolio showcases my skills, projects, and experiences as a developer, all with a magical touch inspired by the enchanting world of Harry Potter.

## 🦉 Development - Setup & Commands

To set up the development environment for this portfolio, follow these steps:

1. Clone this repository to your preferred project path, or if you have [GitHub Desktop](https://desktop.github.com/), you can clone it using GitHub Desktop:
  
  ```shell
  git clone https://github.com/ronhedwigzape/portfolio.git
  ```

2. Navigate to the project directory:
 
  ```shell
  cd portfolio
  ```

3. Install dependencies:

  ```shell
  npm install
  ```

4. Start the local development server at **`localhost:1000`**:

```shell
npm run dev
```

## 🧙‍♂️ Production - GitHub Pages

1. Delete the current `gh-pages` branch:

- Open your terminal or command prompt.
- Type the following command and press Enter:
  
   ```shell
   git push origin --delete gh-pages
   ```

2. Run the build command in the terminal:

- Make sure you are in the **root** directory of your project.
- Open your terminal or command prompt.
- Type the following command and press Enter:

   ```shell   
   npm run build
   ```
  
3. Commit the changes for deployment:

- Open your terminal or command prompt.
- Type the following command to force push **`/public`** and press Enter to commit:

   ```shell
   git add public -f
   git commit -m "chore(deployment): deploy to production"
   ```
  
4. Push the built project to the gh-pages branch:

- Open your terminal or command prompt.
- Type the following command and press Enter:

   ```shell
   git subtree push --prefix public origin gh-pages
   ```
  
5. After deployment:

- Open GitHub Desktop or your preferred Git client.
- Undo the commit you made in the previous step to revert the changes locally.

By following these steps, you can deploy your website to production using GitHub Pages.

## ✨ Features
- Custom Harry Potter themed design and layout
- Interactive elements inspired by the magical world of Harry Potter and from [Nuxt](https://nuxt.com/) UI
- [AudioManager.js](/assets/js/audioManager.js) script for playing theme audio when interacting with the website

## 👨‍💻 Technologies Used

The following technologies were used to develop this portfolio:

- Vue.js 3 Composition API
- Pinia
- Axios
- Vuetify
- JavaScript

Feel free to customize the content, styles, and images to make it your own.

## ⚖ License
This project is licensed under the [MIT License](/LICENSE). Feel free to modify and use it to showcase your own work.

---

Feel free to personalize and modify this README to align with your specific portfolio. Best of luck with your Official Harry Potter Themed Developer Portfolio!




