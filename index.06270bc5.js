document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label"),a=e.name;(a=a[0].toUpperCase()+a.slice(1)).includes("Name")&&(a=a.replace("Name"," Name")),t.setAttribute("for",e.id),t.textContent=a.toUpperCase(),t.classList.add("field-label"),e.placeholder=a,e.parentNode.appendChild(t)});
//# sourceMappingURL=index.06270bc5.js.map
