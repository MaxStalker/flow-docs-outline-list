import autocomplete from "autocompleter";
import "./omnibox.sass";

class Omnibox {
  constructor(props) {
    console.log({ props });
    const { tableId, blockNodeId, closeNodeId, inputId } = props;
    this.tableId = tableId;
    this.linkList = [];
    this.closeNodeId = closeNodeId;
    this.blockNodeId = blockNodeId;
    this.inputId = inputId;

    this._injectOmnibox();

    this.omniboxBlock = document.getElementById(blockNodeId);
    this.omniboxClose = document.getElementById(closeNodeId);
    this.omniboxInput = document.getElementById(inputId);

    this.obAlt = false;
    this.obCtrl = false;

    console.log({ omnibox: this });

    // Add event listeners
    document.addEventListener("keydown", event => {
      if (event.altKey) {
        this.obAlt = true;
      }
      if (event.ctrlKey) {
        this.obCtrl = true;
      }

      if (event.key.toLowerCase() === "f" || event.keyCode === 70) {
        const docLocation =
          location.toString() === "https://docs.onflow.org/docs/cadence";
        if (this.obCtrl && this.obAlt && docLocation) {
          this.showOmnibox();
        }
      }

      if (event.key === "Escape") {
        this.hideOmnibox();
      }
    });
    document.addEventListener("keyup", event => {
      if (event.altKey) {
        this.obAlt = false;
      }
      if (event.ctrlKey) {
        this.obCtrl = false;
      }
    });
  }

  _injectOmnibox() {
    const container = document.createElement("div");
    container.classList.add("omnibox-container");
    container.classList.add("omnibox-container__hidden");
    container.id = this.blockNodeId;

    const input = document.createElement("input");
    input.type = "text";
    input.id = this.inputId;

    const close = document.createElement("div");
    close.classList.add(this.closeNodeId);
    close.id = this.closeNodeId;

    container.appendChild(input);
    container.appendChild(close);

    document.body.appendChild(container);
  }

  prepareList() {
    if (this.linkList.length === 0) {
      const listItems = document.getElementById(this.tableId).parentNode;
      const findAll = node => {
        const mainLink = node.querySelector(":scope p a, :scope a");
        if (mainLink) {
          this.linkList.push({
            label: mainLink.textContent,
            value: mainLink.href.split("#")[1]
          });
        }

        const innerLinks = node.querySelectorAll(":scope > ul > li");
        if (innerLinks.length > 0) {
          innerLinks.forEach(innerNode => findAll(innerNode));
        }
      };

      listItems
        .querySelectorAll(":scope > ul > li")
        .forEach(node => findAll(node));
    }
  }

  showOmnibox() {
    if (this.linkList.length === 0) {
      this.prepareList();
    }
    this.omniboxClose.addEventListener("click", this.hideOmnibox);
    this.omniboxBlock.classList.remove("omnibox-container__hidden");
    this.omniboxRef = autocomplete({
      input: this.omniboxInput,
      className: "omnibox",
      debounceWaitMs: 50,
      emptyMsg: "Nothing found 😟",
      render: function(item) {
        const listItem = document.createElement("div");
        listItem.textContent = item.label;
        listItem.classList.add("omnibox-item");
        return listItem;
      },
      fetch: (text, update) => {
        text = text.toLowerCase();
        let suggestions = this.linkList
          .filter(n => n.label.toLowerCase().includes(text))
          .sort((a, b) => a > b);
        update(suggestions);
      },
      onSelect: item => {
        // this.omniboxInput.value = item.label;
        console.log(item.value);
        const node = document.getElementById(item.value);
        if (node) {
          node.scrollIntoView();
        }
        this.hideOmnibox();
      }
    });
    this.omniboxInput.focus();
  }

  hideOmnibox() {
    this.omniboxInput.value = "";
    this.omniboxClose.removeEventListener("click", this.hideOmnibox);
    this.omniboxBlock.classList.add("omnibox-container__hidden");
    if (this.omniboxRef) {
      this.omniboxRef.destroy();
    }
  }
}
export default Omnibox;
