# <img src="assets/favicon.svg" style="height: 30px; margin-right: 10px;"> ronhedwigzape 

- My Official Harry-Potter Themed Portfolio. 

## 🦉 Setup & Commands

### Development

- All commands are run from the root of the project, from a terminal:

| Command                   | Action                                       |
|:--------------------------|:---------------------------------------------|
| `npm install`             | Installs dependencies                        |
| `npm run dev`             | Starts local dev server at `localhost:1000`  |
| `npm run build`           | Build your production site to `./public/`    |
| `npm run preview`         | Preview your build locally, before deploying |

### Production - GitHub Pages

1. Delete the current `gh-pages` branch:

- Open your terminal or command prompt.
- Type the following command and press Enter:
  
   ```shell
   git branch -D gh-pages
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
   git commit -m "Deploy Portfolio to GitHub Pages"
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
- Delete the **`/public`** directory in your project's repository.

