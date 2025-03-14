class Pagination:
    def __init__(self, items=None, page_size=10):
        self.items = items
        self.page_size = int(page_size)
        self.total_pages = max(1, -(-len(self.items) // self.page_size))
        self.current_page = 1

    def getVisibleItems(self):
        start = (self.current_page - 1) * self.page_size
        end = start + self.page_size
        return self.items[start:end]
    
    def nextPage(self):
        if self.current_page < self.total_pages:
            self.current_page += 1
        return self
    
    def prevPage(self):
        if self.current_page > 1:
            self.current_page -= 1
        return self

    def firstPage(self):
        self.current_page = 1
        return self

    def lastPage(self):
        self.current_page = self.total_pages
        return self
    
    def goToPage(self, pageNum):
        pageNum = int(pageNum)
        if pageNum < 1:
            self.current_page = 1
        elif pageNum > self.total_pages:
            self.current_page = self.total_pages
        else:
            self.current_page = pageNum
        return self


alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

print(p.getVisibleItems())
p.nextPage()
print(p.getVisibleItems())
p.nextPage()
print(p.getVisibleItems())
p.nextPage()
p.goToPage(3)
print(p.getVisibleItems())