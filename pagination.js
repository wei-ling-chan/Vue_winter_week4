export default{
  props:['pages','get-product'],
  
  template:`
 
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" :class="{disabled:!pages.has_pre}"><a class="page-link" href="#" @click.prevent="getProduct(pages.current_page - 1)">Previous</a></li>   
    <li class="page-item" v-for="page in pages.total_pages" :key="page+'page'" :class="{active:page == pages.current_page}"><a class="page-link" href="#" @click.prevent="$emit('change-page',page)">{{page}}</a></li>
    
    <li class="page-item" :class="{disabled:!pages.has_next}"><a class="page-link" href="#" @click.prevent="getProduct(pages.current_page + 1)">Next</a></li>
  </ul>  
</nav>`
};

//當前頁面 
// <li class="page-item" v-for="page in pages.total_pages" :key="page+'page'" :class="{active:page == pages.current_page}"><a class="page-link" href="#" @click.prevent="getProduct(page)">{{page}}</a></li>