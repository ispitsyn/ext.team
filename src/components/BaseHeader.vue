<template>
    <div class="header d-flex justify-content-between flex-md-column pt-3 py-md-4 sticky-md-top align-items-center">
        <div class="header__logo d-flex d-md-block align-items-center">
            <div class="logo mx-auto d-flex justify-content-center align-items-center">EXT</div>
            <hr class="mx-3 my-4 d-none d-md-block"/>
        </div>
        <div class="header__menu d-none d-md-block">
            <a href="#" class="link text-center d-block mb-5">
                <Icon name="home_1_1" size="m"/>
            </a>
            <a href="#" class="link text-center d-block mb-5">
                <Icon name="electro_2" size="m"/>
            </a>
            <a href="#" class="link text-center d-block mb-5">
                <Icon name="accept_cr" size="m"/>
            </a>
            <a href="#" class="link text-center d-block mb-5">
                <Icon name="star_1" size="m"/>
            </a>
            <a href="#" class="link text-center d-block">
                <Icon name="tea_1" size="m"/>
            </a>
        </div>
        <a href="tel:89601634624" class="header__footer d-none d-md-block text-center d-flex align-items-center">
            <hr class="mx-3 my-4 d-none d-md-block"/>
            <Icon name="phone" size="m"/>
        </a>
        
    </div>
</template>

<script>
    import Icon from '@/components/Icon/Icon'
 
    export default {
        name: 'app',
        components: {
            Icon,
         
        }
      
    };
</script>

<style lang="scss" scoped>
    hr{
        width: 26px;
    }
  .logo{
      width: 58px;
      height: 58px;
      background: #0056f9;
      border-radius:50% ;
      color: #fff;
  }
  @media (min-width: 768px) { 
        .header{
            height: 100vh;
        }
  }
  
  .link{
      color: #cdcdcd;
      transition: all .2s;
      &:hover{
          color: #000;
      }
  }
</style>