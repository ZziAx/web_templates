class ListObserver {


   

  get scrollHeight() {
    return this.rootElement.scrollHeight;
  }

  get clientHeight() {
    return this.rootElement.clientHeight;
  }

  get rootElement() {
    return this.rootRef.current;
  }

  get targetNodes() {
    if(this.rootElement == null) return [];
    return Array.from(this.rootElement.querySelectorAll("[index]"));
  }

  constructor(props) {
    this.observer = null;
    this.rootRef = props.rootRef;
    this.onceObservedList = [];
    this.limit = props.limit ?? 10;
      this.handleScroll = this.handleScroll.bind(this);
      this.onReachEnd = props.onReachEnd;
      this.isScrollStreamActive = false;
  }

  isOnceObserved(element) {
    return this.onceObservedList.includes(element.target.getAttribute("id"));
  }

  addNewOnceObserved(notObservedVisibleElements) {
    const notObservedIds = notObservedVisibleElements.map((e) =>
      e.target.getAttribute("id"),
    );

    this.onceObservedList.push(...notObservedIds);
  }

  createNewObserverInstance() {
    const observer = new IntersectionObserver(
      (entries) => {
        const notObservedVisibleElements = entries.filter(
          (e) => e.isIntersecting && !this.isOnceObserved(e),
        );

        if (!notObservedVisibleElements.empty) {
          this.addNewOnceObserved(notObservedVisibleElements);
        }

        // if (
        //   !lazyLoading &&
        //   observeds.length % 10 == 0 &&
        //   observeds.length > lastLength
        // ) {
        //   fetchData();
        // }
      },

      {
        root: this.rootElement, // Observe relative to the viewport
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the sentinel is visible
      },
    );

    return observer;
  }

  observeElements(observer) {
    const targetNodes = this.targetNodes;

    for (var i = 0; i < targetNodes.length; i++) {
      const _node = targetNodes[i];
      observer.observe(_node);
    }
  }

  start() {
    if(!this.rootElement)return;
    this.observer = this.createNewObserverInstance();

    this.observeElements(this.observer);

    this.addScrollListener();
  }

  addScrollListener() {
    this.isScrollStreamActive = true;
    this.rootElement.addEventListener("scroll", this.handleScroll);
  }

  async handleScroll() {
    if(!this.isScrollStreamActive)return;
    if (!this.rootElement) {
      console.error("Scroll container ref is null!");
      return; 
    }

    const scrollThreshold = this.scrollHeight - this.clientHeight - 10;

    if (this.rootElement.scrollTop >= scrollThreshold) {
      this.isScrollStreamActive = false
      await this.onReachEnd();
      this.isScrollStreamActive = true
    } else {
    //   console.log("scrolling ",this.clientHeight);
    }
  }
}

export default ListObserver;
