function createElemWithText(element="p", textContent="", className) //done
{
    const newElement = document.createElement(element);
    const text = document.createTextNode(textContent);
    newElement.appendChild(text);
    if(className)
    {
        newElement.setAttribute('class', className);
    }
    return newElement;
}
function createSelectOptions(data) //done
{
    if (!data) return;
    const options = [];
    data.forEach((user) => {
        const opt = document.createElement("option");
        opt.value = user.id;
        opt.textContent = user.name;
        options.push(opt);
    });
    return options;
}
function toggleCommentSection(postID)
{
    if (!postID) return undefined;
    let section = null;
    document.querySelectorAll(`[data-post-id="${postID}"]`).forEach((elem) => {
        if (elem.tagName.toLowerCase() === 'section') {
            elem.classList.toggle("hide");
            section = elem;
        }
    })
    return section;
}
function toggleCommentButton(postID)
{
    if (!postID) return undefined;
    let button = null;
    document.querySelectorAll(`[data-post-id='${postID}']`).forEach((elem) => {
        if(elem.tagName.toLowerCase() === 'button') {
            elem.textContent = elem.textContent === 'Show Comments'?'Hide Comments':'Show Comments';
            button = elem;
        }
    });
    return button;
}
function deleteChildElements(parent)
{
    if (!parent) return undefined;
    if (!parent?.tagName) return undefined;
    let child = parent.lastElementChild;
    while (child)
    {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
    return parent;
}
function addButtonListeners()
{
    let main = document.querySelector("main");
    let buttons = main.querySelectorAll("button");
    if(buttons)
    {
        buttons.forEach((button) => {
            const postID = button.dataset.postId;
            button.addEventListener("click", function(e) {toggleComments(e, postID)}, false);
        });
    }
    return buttons;
}
function removeButtonListeners()
{
    const main = document.querySelector("main");
    const buttons = main.querySelectorAll("button");
    for(let i of buttons){
        const postId = i.dataset.postId;
        i.removeEventListener("click", function(e){toggleComments(e, postId)},
        false);
    }
    return buttons;
}
function createComments(data)
{
    if (!data) return undefined;
    let fragment = document.createDocumentFragment();
    for (let comment of data){
        let article = document.createElement("article");
        let header = createElemWithText('h3', comment.name);
        let p1 = createElemWithText('p', comment.body);
        let p2 = createElemWithText('p', `From: ${comment.email}`);
        article.append(header, p1, p2);
        fragment.append(article);
    }
    return fragment;
}
function populateSelectMenu(data)
{
    if(!data) return undefined;
    let menu = document.getElementById(`#selectMenu`);
    let options = createSelectOptions(data);
    for (let i of options)
    {
        menu.append(i);
    }
    return menu;
}
async function getUsers()
{
    try
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        return data;
    }
    catch(err)
    {
        console.error(err);
    }
}
async function getUserPosts(userID)
{
    if (!userID) return undefined;
    try
    {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
        return await response.json();
    }
    catch (err)
    {
        console.error(err);
    }
}
async function getUser(userID)
{
    if (!userID) return undefined;
    try
    {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
        return await response.json();
    }
    catch (err)
    {
        console.error(err);
    }
}
async function getPostComments(postID)
{
    if (!userID) return undefined;
    try
    {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userID}`);
        return await response.json();
    }
    catch (err)
    {
        console.error(err);
    }
}
async function displayComments(postID)
{
    if (!postID) return undefined;
    let section = document.createElement("section");
    section.dataset.postId = postID;
    section.classList.add("comments", "hide");
    let comments = await getPostComments(postID);
    let fragment = createComments(comments);
    section.append(fragment);
    return section;
}
async function createPosts(data)
{
    if (!data) return undefined;
    let fragment = document.createDocumentFragment();
    for (let post of data){
        let article = document.createElement("article");
        let header = createElemWithText("h2", post.title);
        let p1 = createElemWithText("p", post.body);
        let p2 = createElemWithText("p", `Post ID: ${post.id}`);
        let author = await getUser(post.userId);
        let p3 = createElemWithText("p", `Author: ${author.name} with ${author.company.name}`);
        let p4 = createElemWithText("p", author.company.catchPhrase);
        let button = createElemWithText("button", "Show Comments");
        button.dataset.postId = post.id;
        article.append(header, p1, p2, p3, p4, button);
        let section = await displayComments(post.id);
        article.append(section);
        fragment.append(article);
    }
    return fragment;
}
async function displayPosts(data)
{
    const main = document.querySelector("main");
    if(data)
    {
        let elm = await createPosts(data);
        main.append(elm);
        return elm;
    }
    else
    {
        let p = createElemWithText("p", "Select an Employee to display their posts.", "default-text");
        return p;
    }
}
function toggleComments(event, postID)
{
    if (!event || !postID) return undefined;
    event.target.listener = true;
    let section = toggleCommentSection(postID);
    let button = toggleCommentButton(postID);
    return [section, button];
}
async function refreshPosts(data)
{
    if (!data) return undefined;
    let buttons = removeButtonListeners();
    let main = deleteChildElements(document.querySelector("main"));
    let fragment = await displayPosts(data);
    let button = addButtonListeners();
    return [buttons, main, fragment, button];
}
async function selectMenuChangeEventHandler(event)
{
    let id = event?.target?.value || 1;
    let get = await getUserPosts(id);
    let refresh = await refreshPosts(get);
    const arr = [];
    arr.push(id, posts, result);
    return arr;
}
async function initPage()
{
    let users = await getUsers();
    let select = populateSelectMenu(users);
    return [users, select];
}
function initApp()
{
    initPage();
    let select = document.getElementById("selectMenu");
    select.addEventListener("click", (e) => {
        selectMenuChangeEventHandler(e);
    });
}
document.addEventListener("DOMContentLoaded", initApp());