import { Company } from "../../types/Companies";

export function companyValidator(company: Company) {
  const errors = [];

  if (company.name.length <= 0) {
    const error = {
      state: "name",
      message: "Razão social é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.fantasyName.length <= 0) {
    const error = {
      state: "fantasyName",
      message: "Nome fantasia é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.cnpj.length !== 14) {
    console.log(company.cnpj.length);
    const error = {
      state: "cnpj",
      message: "CNPJ é obrigatório e deve ter 14 caracteres.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.email.length <= 0) {
    const error = {
      state: "email",
      message: "E-mail é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.cellphone.length <= 0) {
    const error = {
      state: "cellphone",
      message: "Celular é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.address.street.length <= 0) {
    const error = {
      state: "street",
      message: "Logradouro é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.address.number <= 0) {
    const error = {
      state: "number",
      message: "Número é obrigatório e precisa ser diferente de 0.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.address.neighborhood.length <= 0) {
    const error = {
      state: "neighborhood",
      message: "Bairro é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.address.city.length <= 0) {
    const error = {
      state: "city",
      message: "Cidade é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.address.state.length <= 0) {
    const error = {
      state: "state",
      message: "Estado é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.colors.primaryColor.length <= 0) {
    const error = {
      state: "primaryColor",
      message: "Cor primária é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  if (company.colors.secondaryColor.length <= 0) {
    const error = {
      state: "secondaryColor",
      message: "Cor secundária é obrigatório.",
      messageType: "error",
      setErrorField: true,
    };
    errors.push(error);
  }

  return errors;
}
