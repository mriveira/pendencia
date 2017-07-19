    {
        path: '', component: MainComponent, children: [

            { path: '<#classNameLower#>', loadChildren: './main/<#classNameLowerAndSeparator#>/<#classNameLowerAndSeparator#>.module#<#className#>Module' },
        ]
    },
    { path: '<#classNameLower#>/print/:id', loadChildren: './main/<#classNameLowerAndSeparator#>/<#classNameLowerAndSeparator#>-print/<#classNameLowerAndSeparator#>-print.module#<#className#>PrintModule' },

