# dynatab
Create dynamic tab with zurb foundation 5

# Requirements
- Zurb foundation 5 and their dependancies (5.5.3)
 
# Installation
Add in the `<head>` page

```html 
<script type="text/javascript" src="dynatab.js"></script>
```

Add in the `<body>`

```html
<div id="content">

        <ul class="tabs list__table" data-tab role="tablist">
        </ul>

        <div class="tabs-content content__table">         
        </div>
        
</div>
```

# Usage

```javascript
dynatab.ajaxType = 'GET';
dynatab.prefixIdTab = 'css';
dynatab.contentId = 'content';  
var idGenerated = Math.round(Math.random() * (9999 - 1) + 1);
dynatab.createTab(
    'list__table',
    'content__table',
    'Text tab ' + idGenerated,
    'ajax.php', 
     { 
      "prefix": dynatab.prefixIdTab,     
      "id-tab-section": idGenerated
    }
);
  ```
  
  For apply style on the tab, used class `tab-action__close`
