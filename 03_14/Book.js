class Book {
    constructor(title, genre, author, pages, currentPage, price, isOpen) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.pages = pages;
        this.currentPage = currentPage;
        this.price = price;
        this.isOpen = isOpen;
    }
    openBook() {
        if (this.isOpen == false) {
            this.isOpen = true;
            this.currentPage = 1;
            console.log(this.title, "is now open on page:", this.currentPage);
        } else if (this.isOpen == true) {
            console.log(
                this.title,
                "is already open. You are on page:",
                this.currentPage
            );
        }
    }
    closeBook() {
        if (this.isOpen == true) {
            this.isOpen = false;
            this.currentPage = 0;
            console.log(this.title, "is now closed");
        } else if (this.isOpen == false) {
            console.log(this.title, "is already closed");
        }
    }
    goToPage(pageNum) {
        this.isOpen = true;
        this.currentPage = pageNum;
        console.log(this.title, "open on page:", this.currentPage);
    }
    nextPage() {
        if (this.isOpen == false) {
            console.log("You need to open the book first");
        } else {
            if (this.currentPage < this.pages) {
                this.currentPage += 1;
                console.log(this.title, "is now on page:", this.currentPage);
            } else {
                console.log("That was the last page.");
                this.closeBook();
            }
        }
    }
    prevPage() {
        if (this.isOpen == false) {
            console.log("You need to open the book first");
        } else {
            if (this.currentPage > 1) {
                this.currentPage -= 1;
                console.log(this.title, "is now on page:", this.currentPage);
            } else {
                this.closeBook();
            }
        }
    }
}

export default Book;
