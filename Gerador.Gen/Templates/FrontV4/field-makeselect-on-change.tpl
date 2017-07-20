	public onChangeMakeSelect<#propertyName#>(eventArgs) {
        this.vm.model.<#propertyName#> = eventArgs;
        this.<#classNameInstance#>Service.isValid(this.vm);
	}