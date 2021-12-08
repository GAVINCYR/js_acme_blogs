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
    let section = document.querySelectorAll(`section[data-post-id="${postID}"]`);
    if (section)
    {
       section.classList.toggle("hide"); 
       return section;
    }
    else
    {
        return null;
    }
}
function toggleCommentButton(postID)
{
    if (!postID) return undefined;
    let button = document.querySelectorAll(`button[data-post-id="${postID}"]`);
    if (button)
    {
        button.textContent =
            button.textContent === "Show Comments"
            ? "Hide Commments"
            : "Show Comments";
        return button;
    }
    else
    {
        return null;
    }
}
function deleteChildElements(parent)
{
    if (!parent) return undefined;
}
function addButtonListeners()
{

}
function removeButtonListeners()
{

}
function createComments(data)
{

}
function populateSelectMenu(data)
{

}
function getUsers()
{

}
function getUserPosts(userID)
{

}
function getUser(userID)
{

}
function getPostComments(postID)
{

}
async function displayComments(postID)
{

}
async function createPosts(data)
{

}
async function displayPosts(data)
{

}
function toggleComments(event, postID)
{

}
async function refreshPosts(data)
{

}
async function selectMenuChangeEventHandler(event)
{
    let id = event?.target?.value || 1;
    let get = await getUserPosts(id);
    let refresh = await refreshPosts(get);
    return[id, get, refresh];
}
async function initPage()
{

}
function initApp()
{

}