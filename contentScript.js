console.log("Extension injected!");
let menuExists = false;
let listReference = null;

function createLinkNode(header, linkBase, subLevel) {
  const linkNode = document.createElement("a");
  linkNode.href = `${linkBase}#${header.id}`;
  linkNode.id = `ref-link-${header.id}`;
  linkNode.textContent = header.textContent;
  linkNode.classList.add("ref-link");
  if (subLevel) {
    linkNode.classList.add("ref-link--sub-level");
  }
  return linkNode;
}

function createList(linkBase) {
  const list = document.createElement("div");

  const sections = document.querySelectorAll(
    "#content-container .magic-block-html section"
  );

  sections.forEach(section => {
    const sectionHeader = section.querySelector("h2");
    if (sectionHeader) {
      const linkNode = createLinkNode(sectionHeader, linkBase);
      list.appendChild(linkNode);
    }

    const h3Headers = section.querySelectorAll("h3");
    h3Headers.forEach(header => {
      const linkNode = createLinkNode(header, linkBase, true);
      list.appendChild(linkNode);
    });
  });
  return list;
}

function appendList(targetNode, linkBase) {
  const grandParent = targetNode.parentNode.parentNode;
  const wrapper = document.createElement("div");
  wrapper.classList.add("ext-reference-list-wrapper");
  const input = document.createElement("input");
  input.type = "text";
  wrapper.append(input);

  const list = createList(linkBase);

  input.addEventListener("input", event => {
    const { value } = event.target;
    const links = list.querySelectorAll("a");
    if (value === "") {
      links.forEach(link => {
        link.classList.remove("ref-link--hidden");
      });
    } else {
      links.forEach(link => {
        if (!link.textContent.toLowerCase().includes(value.toLowerCase())) {
          link.classList.add("ref-link--hidden");
        } else{
          link.classList.remove("ref-link--hidden");
        }
      });
    }
  });

  list.id = "reference-list";
  list.classList.add("ext-reference-list");

  listReference = wrapper;
  wrapper.appendChild(list);
  grandParent.appendChild(wrapper);
}

window.addEventListener("load", function() {
  const [linkBase, _] = window.location.href.split("#");

  if (linkBase.includes("cadence")) {
    const target = Array.from(
      document.querySelectorAll(".link-title")
    ).find(node => node.textContent.includes("Cadence"));
    appendList(target, linkBase);
    menuExists = true;
  }

  window.addEventListener("hashchange", () => {
    const newHash = window.location.hash;
    document.querySelectorAll(".ref-link").forEach(link => {
      link.classList.remove("active");
    });
    const activeLink = document.getElementById(`ref-link-${newHash}`);
  });

  document.body.addEventListener("click", event => {
    const { target } = event;
    if (target.className.includes("link-title")) {
      if (target.textContent.includes("Cadence")) {
        if (menuExists) {
          listReference.style.display = "block";
        } else {
          console.log("create list a new");
          appendList(target, linkBase);
        }
      } else {
        listReference.style.display = "none";
      }
    }
  });
});
