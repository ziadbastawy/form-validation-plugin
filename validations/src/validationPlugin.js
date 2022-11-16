const rules = {
    required: {
        validate(value) {
            return !!value
        },
        message: `this field is required`
    }
}

export default {
    install(Vue) {
        Vue.mixin({
            methods: {
                $validateData(validations) {
                    const errors = {}
                    const rulesNames = Object.keys(rules)
                    validations.forEach(({ field, condations }) => {
                        condations.forEach((condation) => {
                            if (typeof condation === 'string') {
                                console.log(condation);
                                if (rulesNames.some(item => condations.includes(item))) {
                                    const { message, validate } = rules[condation]
                                    if (!validate(this[field])) {
                                        errors[field] = message
                                    }
                                }
                            } else if (typeof condation === 'object') {
                                console.log(condation);
                                const { message, validate } = condation
                                if (!validate(this[field])) {
                                    errors[field] = message
                                }
                            }
                        })
                    });


                    if (Object.values(errors).length) {
                        return {
                            isValid: false,
                            errors
                        }
                    }
                }
            },

        });
    }
};
