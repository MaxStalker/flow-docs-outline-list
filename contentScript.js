console.log("Extension injected!");

function createList(linkBase) {
  const list = document.createElement("div");

  const sectionHeaders = document.querySelectorAll("#hub-content section h2");
  sectionHeaders.forEach(header => {
    const linkNode = document.createElement("a");
    linkNode.href = `${linkBase}#${header.id}`;
    linkNode.id = `ref-link-${header.id}`;
    linkNode.textContent = header.textContent;
    linkNode.classList.add('ref-link');
    list.appendChild(linkNode);
  });

  return list;
}

window.addEventListener("load", function() {
  const [linkBase, _] = window.location.href.split("#");

  window.addEventListener('hashchange', () =>{
    const newHash = window.location.hash;
    document.querySelectorAll('.ref-link').forEach((link)=>{
      link.classList.remove('active');
    })
    const activeLink = document.getElementById(`ref-link-${newHash}`);
    console.log(activeLink);
    // activeLink.classList.add('active');
  });

  let menuExists = false;
  document.body.addEventListener("click", event => {
    const { target } = event;
    const referenceLink = target.className.includes("link-title");
    const referenceText = target.textContent.includes("Cadence");
    let listReference = null;
    if (referenceLink) {
      if (referenceText) {
        const parent = target.parentNode.parentNode;
        const list = createList(linkBase);
        list.id = "reference-list";
        list.classList.add("ext-reference-list");
        parent.appendChild(list);

        if (menuExists) {
          listReference.style.display = "block";
        } else {
          // TODO: we also need h3 here and structure

          menuExists = true;
          listReference = list;
        }
      } else {
        if (menuExists) {
          listReference.style.display = "none";
        }
      }
    }
  });
});
